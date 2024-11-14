import React, { createContext, useContext, useReducer, useMemo, useEffect } from 'react';

// Define the type for the theme state
type ThemeState = 'light' | 'dark';

// Define actions for useReducer
type ThemeAction = { type: 'TOGGLE_THEME' };

// Create a context with default value
const ThemeContext = createContext<{ theme: ThemeState; toggleTheme: () => void }>({
  theme: 'light',
  toggleTheme: () => {},
});

// Reducer function to manage theme state
const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return state === 'light' ? 'dark' : 'light';
    default:
      return state;
  }
};

// Helper function to load theme from local storage
const loadThemeFromStorage = (): ThemeState => {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme === 'dark' ? 'dark' : 'light'; // Default to 'light' if not set
};

// Provider component
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize state with local storage value
  const [theme, dispatch] = useReducer(themeReducer, loadThemeFromStorage());

  // Update local storage whenever the theme state changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Memoize the context value for performance
  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => dispatch({ type: 'TOGGLE_THEME' }),
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);
