import React, { createContext, useContext, useState, ReactNode } from 'react';

/**
 * Interface defining the shape of our theme context
 */
interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
  theme: {
    background: string;
    text: string;
    primary: string;
  };
}

/**
 * Interface for the ThemeProvider props
 */
interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * Theme configurations for light and dark modes
 */
const themes = {
  light: {
    background: 'bg-white',
    text: 'text-gray-900',
    primary: 'text-blue-600'
  },
  dark: {
    background: 'bg-gray-900',
    text: 'text-gray-100',
    primary: 'text-blue-400'
  }
};

/**
 * Create the Theme context with a default value
 */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Custom hook to use the theme context
 * @throws {Error} If used outside of ThemeProvider
 */
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

/**
 * Theme Provider component that wraps the app and provides theme context
 * @param {ThemeProviderProps} props - The provider props
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  /**
   * Toggle between light and dark themes
   */
  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const theme = isDarkMode ? themes.dark : themes.light;

  const value = {
    isDarkMode,
    toggleTheme,
    theme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
