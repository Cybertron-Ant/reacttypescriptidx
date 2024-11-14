import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/store';
import { toggleTheme } from './features/themeSlice';
import { login, logout } from './features/authSlice';
import LanguageSelector from './components/LanguageSelector';

const App: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme);
  const isAuthenticated = useSelector((state: RootState) => state.auth);
  const language = useSelector((state: RootState) => state.language);
  const dispatch = useDispatch();

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Main Heading */}
      <h1 className="text-4xl font-bold mb-6">
        {language === 'en' ? 'Welcome' : 'Bienvenido'}
      </h1>

      {/* Theme Toggle Button */}
      <button
        onClick={() => dispatch(toggleTheme())}
        className="px-4 py-2 mb-4 rounded-lg shadow-lg focus:outline-none transition-colors duration-300 ease-in-out
                   hover:bg-blue-600 hover:text-white
                   dark:bg-blue-700 dark:hover:bg-blue-500"
      >
        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </button>

      {/* Authentication Button */}
      <button
        onClick={() => (isAuthenticated ? dispatch(logout()) : dispatch(login()))}
        className="px-4 py-2 mb-4 rounded-lg shadow-lg bg-green-500 text-white focus:outline-none transition-colors duration-300 ease-in-out
                   hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-500"
      >
        {isAuthenticated ? 'Logout' : 'Login'}
      </button>

      {/* Language Selector Component */}
      <LanguageSelector />
    </div>
  );
};

export default App;
