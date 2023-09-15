import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const login = () => {
    localStorage.setItem('loggedIn', true);
  };

  const logout = () => {
    localStorage.setItem('loggedIn', false);
  };

  const loginState = localStorage.getItem('loggedIn');

  return <AuthContext.Provider value={{ loginState, login, logout }}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
