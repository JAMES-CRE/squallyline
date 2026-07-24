// providers/AuthProvider.jsx
import React, { useState, useEffect } from 'react';
import { AuthContext, transformUserData } from '../contexts/AuthContext';

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [loading, setLoading] = useState(true);

    // const API_BASE_URL = 'http://172.20.10.4:8000/woodAxis/api';
    const API_BASE_URL = 'https://api.woodaxiz.com/woodAxis/api';

    useEffect(() => {
        const initializeAuth = async () => {
            const storedToken = localStorage.getItem('token');
            const storedUser = localStorage.getItem('user');

            if (storedToken && storedUser) {
                try {
                    setToken(storedToken);
                    setUser(JSON.parse(storedUser));
                } catch (error) {
                    console.error('Failed to restore session:', error);
                    logout();
                }
            }
            setLoading(false);
        };

        initializeAuth();
    }, []);

    const login = (userData, authToken, refreshToken) => {
        const transformedUser = transformUserData(userData);
        setUser(transformedUser);
        setToken(authToken);
        localStorage.setItem('token', authToken);
        localStorage.setItem('refresh_token', refreshToken);
        localStorage.setItem('user', JSON.stringify(transformedUser));
    };

    const logout = async () => {
        try {
            const refreshToken = localStorage.getItem('refresh_token');
            
            await fetch(`${API_BASE_URL}/logout/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...(token && { 'Authorization': `Bearer ${token}` })
                },
                body: JSON.stringify({ refresh: refreshToken })
            });
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            setUser(null);
            setToken(null);
            localStorage.removeItem('token');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('user');
        }
    };

    const getAuthHeaders = () => {
        const headers = { 'Content-Type': 'application/json' };
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        return headers;
    };

    const refreshAccessToken = async () => {
        const refreshToken = localStorage.getItem('refresh_token');
        if (!refreshToken) return false;
        
        try {
            const response = await fetch(`${API_BASE_URL}/auth/refresh/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ refresh: refreshToken })
            });
            
            if (response.ok) {
                const data = await response.json();
                setToken(data.access);
                localStorage.setItem('token', data.access);
                return true;
            }
        } catch (error) {
            console.error('Token refresh failed:', error);
        }
        
        return false;
    };

    const authFetch = async (url, options = {}) => {
        const makeRequest = async (currentToken) => {
            const headers = {
                'Content-Type': 'application/json',
                ...options.headers,
            };
            
            if (currentToken) {
                headers['Authorization'] = `Bearer ${currentToken}`;
            }
            
            return fetch(url, { ...options, headers });
        };
        
        let response = await makeRequest(token);
        
        if (response.status === 401) {
            const refreshed = await refreshAccessToken();
            if (refreshed) {
                response = await makeRequest(localStorage.getItem('token'));
            } else {
                logout();
                throw new Error('Session expired');
            }
        }
        
        return response;
    };



    const value = {
        API_BASE_URL,
        user,
        token,
        loading,
        login,
        logout,
        isAuthenticated: !!(user && token),
        getAuthHeaders,
        authFetch,
    };
    
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};