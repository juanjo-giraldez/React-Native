// Defenir informació en este espacio

import React, {createContext} from 'react';

export interface AuthContext {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

// Estado incial;

export const authInitialState: AuthContext = () => {
  isLoggedIn: false;
  username: undefined;
  favoriteIcon: undefined;
};

// interface Context ,como luce y que tiene el context

export interface AuthContextProps {
  AuthState: AuthState;
  signIn: () => void;
}

// Crear el contexto

export const AuthContext = createContext({} as AuthContextProps);

// Provedor del estado

export const AuthProvider = ({ children }: any) => {
  return (
      <AuthContext.Provider value={{
          authState: authInitialState,
          signIn: () => {}
      }}>{children}</AuthContext.Provider>
  );
};
