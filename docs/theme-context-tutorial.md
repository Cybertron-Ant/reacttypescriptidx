# Theme Context Tutorial

This step-by-step tutorial will guide you through implementing and using the Theme Context in your React TypeScript application.

## Table of Contents
1. [Setup](#setup)
2. [Creating Your First Theme Component](#creating-your-first-theme-component)
3. [Advanced Usage](#advanced-usage)
4. [Tips and Tricks](#tips-and-tricks)

## Setup

### Step 1: Create the Theme Context

First, create a new file `src/context/ThemeContext.tsx`:

```typescript
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
  theme: {
    background: string;
    text: string;
    primary: string;
  };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const toggleTheme = () => setIsDarkMode(prev => !prev);
  
  const theme = isDarkMode ? {
    background: 'bg-gray-900',
    text: 'text-gray-100',
    primary: 'text-blue-400'
  } : {
    background: 'bg-white',
    text: 'text-gray-900',
    primary: 'text-blue-600'
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
```

### Step 2: Wrap Your App

In your `App.tsx`, wrap your application with the ThemeProvider:

```typescript
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}
```

## Creating Your First Theme Component

### Step 1: Create a Basic Themed Component

Create a new component that uses the theme context:

```typescript
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemedCard: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`p-4 rounded-lg ${theme.background} ${theme.text}`}>
      <h2 className={theme.primary}>Themed Card</h2>
      <p>This card uses the current theme!</p>
    </div>
  );
};

export default ThemedCard;
```

### Step 2: Add Theme Toggle

Create a theme toggle component:

```typescript
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme, theme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-2 rounded-md ${theme.primary} border border-current`}
    >
      Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default ThemeToggle;
```

## Advanced Usage

### Using with Custom Components

```typescript
import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface CustomButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, children }) => {
  const { theme } = useTheme();
  
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 
        rounded-md 
        ${theme.primary} 
        hover:opacity-80 
        transition-opacity
      `}
    >
      {children}
    </button>
  );
};

export default CustomButton;
```

### Conditional Styling

```typescript
const ConditionalComponent: React.FC = () => {
  const { isDarkMode, theme } = useTheme();
  
  return (
    <div className={`
      p-4 
      ${theme.background} 
      ${theme.text}
      ${isDarkMode ? 'shadow-lg' : 'shadow-md'}
    `}>
      <p>This component has different shadows based on the theme!</p>
    </div>
  );
};
```

## Tips and Tricks

### 1. Memoization for Performance

```typescript
import React, { memo } from 'react';
import { useTheme } from '../context/ThemeContext';

const HeavyComponent: React.FC = memo(() => {
  const { theme } = useTheme();
  
  return (
    <div className={theme.background}>
      {/* Heavy computation or rendering */}
    </div>
  );
});
```

### 2. Custom Theme Hooks

```typescript
const useThemedStyles = () => {
  const { isDarkMode, theme } = useTheme();
  
  return {
    container: `${theme.background} ${theme.text} p-4`,
    button: `${theme.primary} px-4 py-2 rounded`,
    isDarkMode
  };
};
```

### 3. Error Boundaries

```typescript
import React, { Component, ErrorInfo, ReactNode } from 'react';

class ThemeErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Theme error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong with the theme.</div>;
    }

    return this.props.children;
  }
}
```

## Common Patterns

### 1. Theme Persistence

```typescript
const usePersistedTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode] as const;
};
```

### 2. System Theme Detection

```typescript
const useSystemTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => 
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return isDarkMode;
};
```

## Testing

### Example Test with React Testing Library

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, useTheme } from './ThemeContext';

const TestComponent = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? 'Dark' : 'Light'}
    </button>
  );
};

test('theme toggle works', () => {
  render(
    <ThemeProvider>
      <TestComponent />
    </ThemeProvider>
  );

  const button = screen.getByRole('button');
  expect(button).toHaveTextContent('Light');
  
  fireEvent.click(button);
  expect(button).toHaveTextContent('Dark');
});
```

## Next Steps

1. Explore adding additional theme properties
2. Implement theme transitions
3. Add theme persistence
4. Create more themed components
5. Add system theme detection

Remember to always wrap components that use the `useTheme` hook with `ThemeProvider`, and handle potential errors appropriately.
