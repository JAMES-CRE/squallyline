// contexts/AuthContext.js
import { createContext } from 'react';

// Helper function to transform API user data to match frontend needs
export const transformUserData = (apiUser) => {
    return {
        id: apiUser.id,
        username: apiUser.username,
        email: apiUser.email,
        phone_number: apiUser.phone_number,
        first_name: apiUser.first_name,
        last_name: apiUser.last_name,
        full_name: `${apiUser.first_name} ${apiUser.last_name}`.trim(),
        role: apiUser.role,
        is_active: apiUser.is_active,
        date_joined: apiUser.date_joined,
        updated_at: apiUser.updated_at,
    };
};

// Create context with undefined default
export const AuthContext = createContext(undefined);