import React from 'react';
import { useTheme } from '../../context/ThemeContext';

/**
 * ThemeToggle Component
 * Demonstrates the usage of useContext through our custom useTheme hook
 */
const ThemeToggle: React.FC = () => {
  // Use our custom hook to access theme context
  const { isDarkMode, toggleTheme, theme } = useTheme();

  return (
    <div className={`p-4 ${theme.background} ${theme.text} transition-colors duration-300`}>
      <button
        onClick={toggleTheme}
        className={`px-4 py-2 rounded-md ${theme.primary} border border-current`}
      >
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
      <p className="mt-4">
        Current theme: {isDarkMode ? 'Dark' : 'Light'}
      </p>
    </div>
  );
};

export default ThemeToggle;
