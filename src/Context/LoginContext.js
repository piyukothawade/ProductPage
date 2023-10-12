import React, { createContext, useState, useContext } from "react";

const LoginContext = createContext();

export const useLoginContext = () => {
    return useContext(LoginContext);
};

export const LoginProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    const login = () => {
        setIsLoggedIn(true);
    };

    // Your logout logic can be expanded here
    const logout = () => {
        setIsLoggedIn(false);
    };

    return (
        <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser }}>
            {children}
        </LoginContext.Provider>
    );
};
