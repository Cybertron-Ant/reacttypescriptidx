
# React App: Mastering Global State with Context API and Advanced Hooks

## Project Overview

This project is a React application built using TypeScript, Vite, and TailwindCSS. The main goal is to demonstrate global state management using React's Context API, along with advanced hooks like `useContext`, `useReducer`, and `useMemo`. These tools are essential for handling shared state and optimizing performance in real-world React applications.

### Key Objectives:
1. **Global State Management**: Avoid prop drilling by utilizing Context API.
2. **Advanced React Hooks**:
   - `useContext` for accessing context values.
   - `useReducer` for managing complex state logic.
   - `useMemo` for performance optimization.

## Project Structure

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

### Step 1: Create ThemeContext

In `ThemeContext.tsx`, we created a context to manage the global theme state using `useReducer`. This allows us to easily toggle between light and dark modes.

**Why use `useReducer`?**  
`useReducer` is perfect for managing complex state logic, such as toggling themes or handling multiple state transitions in one context.

```tsx
import React, { createContext, useContext, useReducer, useMemo } from 'react';

const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} });

const themeReducer = (state, action) => (action.type === 'TOGGLE_THEME' ? (state === 'light' ? 'dark' : 'light') : state);

export const ThemeProvider = ({ children }) => {
  const [theme, dispatch] = useReducer(themeReducer, 'light');
  const value = useMemo(() => ({ theme, toggleTheme: () => dispatch({ type: 'TOGGLE_THEME' }) }), [theme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
```

### Step 2: Create AuthContext

In `AuthContext.tsx`, we implemented a global authentication state using `useReducer`. This helps manage user login/logout flow across the app.

**Real-World Use Case:**  
In real-world applications, authentication state is crucial for determining user access and handling secure sessions.

```tsx
import React, { createContext, useContext, useReducer, useMemo } from 'react';

const AuthContext = createContext({ state: { isAuthenticated: false }, login: () => {}, logout: () => {} });

const authReducer = (state, action) => (action.type === 'LOGIN' ? { isAuthenticated: true } : { isAuthenticated: false });

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { isAuthenticated: false });
  const value = useMemo(() => ({ state, login: () => dispatch({ type: 'LOGIN' }), logout: () => dispatch({ type: 'LOGOUT' }) }), [state]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
```

### Step 3: Create UI Components

We added two components: `ThemeToggle` and `AuthButton`. These components interact with their respective contexts, demonstrating the use of `useContext` for accessing shared state.

**Code Example: `ThemeToggle.tsx`**
```tsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>{theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}</button>;
};

export default ThemeToggle;
```

### Step 4: Update App.tsx

We integrated the `ThemeProvider` and `AuthProvider` into the main application file to enable global state management.

```tsx
import React from 'react';
import ThemeToggle from './components/ThemeToggle';
import AuthButton from './components/AuthButton';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';

const App = () => (
  <ThemeProvider>
    <AuthProvider>
      <ThemeToggle />
      <AuthButton />
    </AuthProvider>
  </ThemeProvider>
);

export default App;
```

## Why This Matters in Real-World Applications

1. **Scalable State Management**: Using Context API with hooks like `useReducer` helps in managing state across large applications without resorting to prop drilling or third-party state management libraries.
2. **Improved Performance**: Using `useMemo` for memoization reduces unnecessary re-renders, improving app performance.
3. **User Experience**: Global state management is crucial for features like dark mode and authentication, enhancing the overall user experience.

## Conclusion

This project demonstrates how to effectively use React Context API and advanced hooks for state management. By implementing theme toggling and authentication states, we've built a scalable and efficient React application.

## Next Steps

- Extend the application by adding persistent state using localStorage.
- Add more complex state handling with nested reducers.

---

**Files Implemented:**
- `ThemeContext.tsx`
- `AuthContext.tsx`
- `ThemeToggle.tsx`
- `AuthButton.tsx`
- `App.tsx`
