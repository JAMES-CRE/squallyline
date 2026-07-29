// src/providers/MockAuthProvider.jsx
import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const MockAuthProvider = ({ children }) => {
  // Mock user data - simulates a logged-in customer
  const [user] = useState({
    id: 1,
    username: 'akosua',
    email: 'akosua@mail.com',
    first_name: 'Akosua',
    last_name: 'Mensah',
    phone_number: '0245550192',
    role: 'customer',
    full_name: 'Akosua Mensah',
  });

  const [token] = useState('mock_token_12345');
  const [loading] = useState(false);

  const login = (userData, authToken) => {
    console.log('Mock login:', userData, authToken);
    localStorage.setItem('token', authToken);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    console.log('Mock logout');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  const value = {
    user,
    token,
    loading,
    login,
    logout,
    isAuthenticated: true, // Always true for testing
    getAuthHeaders: () => ({ 'Authorization': `Bearer ${token}` }),
    authFetch: async (url, options = {}) => {
      console.log('Mock fetch:', url, options);
      return { 
        ok: true, 
        json: async () => ({ success: true, data: {} }) 
      };
    },
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};