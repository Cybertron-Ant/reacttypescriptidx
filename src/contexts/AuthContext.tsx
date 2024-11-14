import React, { createContext, useContext, useReducer, useMemo } from 'react';

type AuthState = { isAuthenticated: boolean };
type AuthAction = { type: 'LOGIN' | 'LOGOUT' };

const AuthContext = createContext<{ state: AuthState; login: () => void; logout: () => void }>({
  state: { isAuthenticated: false },
  login: () => {},
  logout: () => {},
});

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      return { isAuthenticated: true };
    case 'LOGOUT':
      return { isAuthenticated: false };
    default:
      return state;
  }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { isAuthenticated: false });

  const value = useMemo(
    () => ({
      state,
      login: () => dispatch({ type: 'LOGIN' }),
      logout: () => dispatch({ type: 'LOGOUT' }),
    }),
    [state]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
