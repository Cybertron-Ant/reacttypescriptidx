import React, { createContext, useContext, useReducer, useMemo, useEffect } from 'react';

type AuthState = { isAuthenticated: boolean };
type AuthAction = { type: 'LOGIN' | 'LOGOUT' };

const AuthContext = createContext<{ state: AuthState; login: () => void; logout: () => void }>({
  state: { isAuthenticated: false },
  login: () => {},
  logout: () => {},
});

// Reducer function to manage authentication state
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

// Helper function to load auth state from local storage
const loadAuthFromStorage = (): AuthState => {
  const savedAuth = localStorage.getItem('isAuthenticated');
  return { isAuthenticated: savedAuth === 'true' };
};

// Provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize state with local storage value
  const [state, dispatch] = useReducer(authReducer, loadAuthFromStorage());

  // Update local storage whenever the auth state changes
  useEffect(() => {
    localStorage.setItem('isAuthenticated', state.isAuthenticated.toString());
  }, [state.isAuthenticated]);

  // Memoize the context value for performance
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

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
