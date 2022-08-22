import React, { createContext } from 'react';

import useAuth from './hooks/useAuth';

const Context = createContext();

function AuthProvider({ children }) {
  const {
    isAuthenticated, loading, handleLogin, handleLogout, handleUpdatePanicButton, handleDelete, user
  } = useAuth();

  return (
    <Context.Provider value={{ loading, isAuthenticated, handleLogin, handleLogout, handleUpdatePanicButton, handleDelete, user }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };