import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/store';
import { toggleTheme } from './features/themeSlice';
import { login, logout } from './features/authSlice';
import { FormattedMessage } from 'react-intl';
import LanguageSelector from './components/LanguageSelector';

const App: React.FC<{ changeLocale: (locale: string) => void }> = ({ changeLocale }) => {
  const theme = useSelector((state: RootState) => state.theme);
  const isAuthenticated = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Main Heading */}
      <h1 className="text-4xl font-bold mb-6">
        <FormattedMessage id="welcome" />
      </h1>

      {/* Theme Toggle Button */}
      <button
        onClick={() => dispatch(toggleTheme())}
        className="px-4 py-2 mb-4 rounded-lg shadow-lg focus:outline-none transition-colors duration-300
                   hover:bg-blue-600 hover:text-white dark:bg-blue-700 dark:hover:bg-blue-500"
      >
        <FormattedMessage id="toggleTheme" values={{ theme: theme === 'light' ? 'Dark' : 'Light' }} />
      </button>

      {/* Authentication Button */}
      <button
        onClick={() => (isAuthenticated ? dispatch(logout()) : dispatch(login()))}
        className="px-4 py-2 mb-4 rounded-lg shadow-lg bg-green-500 text-white focus:outline-none
                   hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-500"
      >
        <FormattedMessage id={isAuthenticated ? 'logout' : 'login'} />
      </button>

      {/* Language Selector Component */}
      <LanguageSelector changeLocale={changeLocale} />
    </div>
  );
};

export default App;
