import { createContext } from 'react';

export const AuthContext = createContext({
    token: null,
    userId: null,
    userName: null,
    userEmail: null,
    isLoggedIn: false,
    login: () => {},
    logout: () => {},
});