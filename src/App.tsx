import React from 'react';
import ThemeToggle from './components/ThemeToggle';
import AuthButton from './components/AuthButton';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
          <h1 className="text-2xl font-bold mb-4">React Context API Demo</h1>
          <ThemeToggle />
          <AuthButton />
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
