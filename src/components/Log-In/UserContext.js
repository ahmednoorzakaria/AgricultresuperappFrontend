import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState('');

  const login = (username) => {
    setLoggedInUser(username);
  };

  const logout = () => {
    setLoggedInUser('');
  };

  return (
    <UserContext.Provider value={{ loggedInUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
