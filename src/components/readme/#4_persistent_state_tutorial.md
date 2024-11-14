
# React App: Mastering Global State with Context API, Advanced Hooks, and State Persistence

## Project Overview

In this extension, we've enhanced the React application to include **persistent global state** using local storage. This update allows the theme preference (light/dark mode) and user authentication state (login/logout) to persist across browser sessions, providing a better user experience.

### Key Objectives:
1. **Global State Management** using React Context API.
2. **Advanced React Hooks** for state updates and optimizations:
   - `useContext` for accessing context values.
   - `useReducer` for managing complex state logic.
   - `useMemo` for performance optimization.
3. **State Persistence with Local Storage**:
   - Utilize local storage to persist theme and authentication state between sessions.

## Updated Project Structure

```plaintext
src/
├── components/
│   ├── AuthButton.tsx
│   └── ThemeToggle.tsx
├── contexts/
│   ├── AuthContext.tsx
│   └── ThemeContext.tsx
├── App.tsx
└── main.tsx
```

## Step-by-Step Tutorial

### Step 1: Update ThemeContext with Local Storage

In `ThemeContext.tsx`, we added local storage functionality to save and load the theme state. This allows the user's theme preference to persist across sessions.

#### Code Example:
```tsx
import React, { createContext, useContext, useReducer, useMemo, useEffect } from 'react';

const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} });

const themeReducer = (state, action) => (action.type === 'TOGGLE_THEME' ? (state === 'light' ? 'dark' : 'light') : state);

// Load theme from local storage
const loadThemeFromStorage = () => {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme === 'dark' ? 'dark' : 'light';
};

export const ThemeProvider = ({ children }) => {
  const [theme, dispatch] = useReducer(themeReducer, loadThemeFromStorage());

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const value = useMemo(() => ({ theme, toggleTheme: () => dispatch({ type: 'TOGGLE_THEME' }) }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
```

### Step 2: Update AuthContext with Local Storage

In `AuthContext.tsx`, we added local storage functionality to save and load the authentication state. This ensures that the user remains logged in even after refreshing the page.

#### Code Example:
```tsx
import React, { createContext, useContext, useReducer, useMemo, useEffect } from 'react';

const AuthContext = createContext({ state: { isAuthenticated: false }, login: () => {}, logout: () => {} });

const authReducer = (state, action) => (action.type === 'LOGIN' ? { isAuthenticated: true } : { isAuthenticated: false });

// Load auth state from local storage
const loadAuthFromStorage = () => {
  const savedAuth = localStorage.getItem('isAuthenticated');
  return { isAuthenticated: savedAuth === 'true' };
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, loadAuthFromStorage());

  useEffect(() => {
    localStorage.setItem('isAuthenticated', state.isAuthenticated.toString());
  }, [state.isAuthenticated]);

  const value = useMemo(() => ({ state, login: () => dispatch({ type: 'LOGIN' }), logout: () => dispatch({ type: 'LOGOUT' }) }), [state]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
```

### Step 3: Update UI Components

We updated the `ThemeToggle` and `AuthButton` components to reflect changes in the context, and they now read the persisted state from local storage.

#### ThemeToggle.tsx:
```tsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>{theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}</button>;
};

export default ThemeToggle;
```

#### AuthButton.tsx:
```tsx
import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const AuthButton = () => {
  const { state, login, logout } = useAuth();
  return <button onClick={state.isAuthenticated ? logout : login}>{state.isAuthenticated ? 'Logout' : 'Login'}</button>;
};

export default AuthButton;
```

### Step 4: Update App.tsx

We integrated the updated providers in `App.tsx` to ensure the global state persists across the application.

```tsx
import React from 'react';
import ThemeToggle from './components/ThemeToggle';
import AuthButton from './components/AuthButton';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';

const App = () => (
  <ThemeProvider>
    <AuthProvider>
      <div className="app-container">
        <ThemeToggle />
        <AuthButton />
      </div>
    </AuthProvider>
  </ThemeProvider>
);

export default App;
```

## Real-World Importance

1. **Enhanced User Experience**:
   - Persisting theme preference and login state improves the user experience by remembering settings between sessions.
   - This is commonly used in web applications, such as remembering dark mode preferences or keeping users logged in.

2. **Better State Management**:
   - Using local storage for persistent state, combined with `useReducer` for complex state updates, provides a scalable solution for state management in larger applications.

3. **Performance Optimization**:
   - Memoization with `useMemo` reduces unnecessary re-renders, contributing to better performance in React apps.

## Conclusion

By extending the application to include local storage, we've demonstrated a practical approach to handling persistent global state in React. This technique is highly relevant for real-world applications where user preferences and authentication state need to be maintained.

---