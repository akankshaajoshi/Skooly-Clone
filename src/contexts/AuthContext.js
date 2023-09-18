import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // Initialize the login state from localStorage, defaulting to false
  const [loginState, setLoginState] = useState(localStorage.getItem('loggedIn') === 'true');

  const login = () => {
    localStorage.setItem('loggedIn', 'true');
    setLoginState(true); // Update the login state in the context
  };

  const logout = () => {
    localStorage.setItem('loggedIn', 'false');
    setLoginState(false); // Update the login state in the context
  };

  return (
    <AuthContext.Provider value={{ loginState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
