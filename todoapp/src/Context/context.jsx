import React, { createContext, useState } from 'react';

// Create the context
export const LoginContext = createContext();

// Create the provider component
export const LoginProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <LoginContext.Provider value={{ isLogin, setIsLogin }}>
            {children}
        </LoginContext.Provider>
    );
};
