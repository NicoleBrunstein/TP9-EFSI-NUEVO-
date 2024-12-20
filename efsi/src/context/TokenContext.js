'use client'

import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const TokenContext = createContext();

const TokenProvider = (props) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    
    const storedToken = Cookies.get('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const saveToken = (newToken) => {
    
    Cookies.set('token', newToken, { expires: 1, path: '/', sameSite: 'Lax' });
    setToken(newToken);
  };

  return (
    <TokenContext.Provider
      value={{
        token,
        saveToken,
        isLoggedIn: !!token
      }}
    >
      {props.children}
    </TokenContext.Provider>
  );
};

export default TokenProvider;
