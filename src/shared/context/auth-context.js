import { createContext } from 'react';

export const AuthContext = createContext({
    isLoggenIn: false,
    login: () => {},
    logout: () => {},
});