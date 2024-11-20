# Tailwind CSS in React TypeScript Tutorial

This tutorial will guide you through using Tailwind CSS in your React TypeScript project, from basic concepts to advanced patterns.

## Table of Contents
1. [Getting Started](#getting-started)
2. [Basic Concepts](#basic-concepts)
3. [Responsive Design](#responsive-design)
4. [Custom Components](#custom-components)
5. [Advanced Patterns](#advanced-patterns)
6. [Troubleshooting](#troubleshooting)

## Getting Started

### Installation
```bash
# Install Tailwind CSS and its dependencies
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind CSS
npx tailwindcss init -p
```

### Configuration Setup
1. Update `tailwind.config.js`:
```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
```

2. Create or update your CSS file (e.g., `src/styles/main.css`):
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

3. Import the CSS in your main component:
```typescript
import './styles/main.css';
```

## Basic Concepts

### 1. Utility-First Approach
Instead of writing custom CSS, use Tailwind's utility classes:

```tsx
// Traditional CSS
<div className="header">
  <h1 className="title">Hello World</h1>
</div>

// With Tailwind CSS
<div className="p-4 bg-white shadow-md">
  <h1 className="text-2xl font-bold text-gray-800">Hello World</h1>
</div>
```

### 2. Common Utilities
- Spacing: `p-4` (padding), `m-2` (margin)
- Typography: `text-xl`, `font-bold`, `text-center`
- Colors: `text-blue-500`, `bg-gray-100`
- Layout: `flex`, `grid`, `container`

## Responsive Design

### Breakpoint Prefixes
```tsx
<div className="
  w-full          // Mobile first
  md:w-1/2       // Medium screens (768px)
  lg:w-1/3       // Large screens (1024px)
">
  Responsive Content
</div>
```

### Example: Responsive Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div className="card">Item 1</div>
  <div className="card">Item 2</div>
  <div className="card">Item 3</div>
</div>
```

## Custom Components

### 1. Creating Reusable Components
Use the `@layer components` directive in your CSS:

```css
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-500 text-white rounded-md
    hover:bg-blue-600 transition-colors duration-200;
  }
}
```

### 2. Component Example
```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children }) => {
  const baseClasses = "px-4 py-2 rounded-md transition-colors duration-200";
  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300"
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </button>
  );
};
```

## Advanced Patterns

### 1. Dynamic Classes
```tsx
const isDark = true;

<div className={` 
  ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}
  p-4 rounded-lg
`}>
  Dynamic Content
</div>
```

### 2. Custom Variants
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      backgroundColor: {
        'primary': {
          light: '#60A5FA',
          DEFAULT: '#3B82F6',
          dark: '#2563EB',
        }
      }
    }
  }
}
```

### 3. Group Hover Effects
```tsx
<div className="group hover:bg-gray-100 p-4">
  <h2 className="group-hover:text-blue-500">
    Hover the parent to see this change
  </h2>
</div>
```

## Troubleshooting

### Common Issues and Solutions

1. **Classes not applying**
   - Check if the file is included in `content` array in `tailwind.config.js`
   - Ensure CSS file is imported correctly
   - Clear PostCSS cache: `rm -rf node_modules/.cache/postcss`

2. **Custom classes not working**
   - Verify `@layer` directive usage
   - Check for syntax errors in class definitions
   - Ensure proper ordering of CSS imports

3. **Build optimization issues**
   - Use PurgeCSS correctly
   - Check for dynamic class name generation
   - Verify proper content configuration

### Performance Tips
1. Use JIT mode for faster development
2. Minimize dynamic class name generation
3. Leverage component extraction for repeated patterns
4. Use proper purge configuration in production

Need help? Check out:
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React TypeScript Documentation](https://www.typescriptlang.org/docs/handbook/react.html)
- [PostCSS Documentation](https://postcss.org/)

## HR Management System - Tutorial

## Introduction
This tutorial will guide you through building a React TypeScript application with Higher Order Components (HOCs) for authentication, data fetching, and permissions management.

## Prerequisites
- Node.js 14+
- npm or yarn
- Basic knowledge of React and TypeScript
- Code editor (VS Code recommended)

## Step 1: Project Setup

1. Create a new React TypeScript project:
```bash
npm create vite@latest my-hr-system -- --template react-ts
cd my-hr-system
npm install
```

2. Install required dependencies:
```bash
npm install react-router-dom @types/react-router-dom
```

## Step 2: Create Authentication Context

1. Create `src/context/AuthContext.tsx`:
```typescript
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  userRole: string;
  login: (username: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<ReactNode> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('');

  const login = (username: string) => {
    setIsAuthenticated(true);
    setUserRole('HR_ADMIN');
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole('');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
```

## Step 3: Implement Higher Order Components

1. Create `src/hoc/withAuthentication.tsx`:
```typescript
import React, { ComponentType } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export interface WithAuthenticationProps {
  isAuthenticated: boolean;
  userRole: string;
  userName: string;
}

export const withAuthentication = <P extends object>(
  WrappedComponent: ComponentType<P & WithAuthenticationProps>,
  requiredRole?: string
) => {
  return (props: Omit<P, keyof WithAuthenticationProps>) => {
    const { isAuthenticated, userRole } = useAuth();

    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }

    if (requiredRole && userRole !== requiredRole) {
      return <Navigate to="/unauthorized" replace />;
    }

    return (
      <WrappedComponent
        {...(props as P)}
        isAuthenticated={isAuthenticated}
        userRole={userRole}
        userName="John Doe"
      />
    );
  };
};
```

2. Create `src/hoc/withDataFetching.tsx` and `src/hoc/withPermissions.tsx` similarly.

## Step 4: Create Components

1. Create `src/components/Login.tsx`:
```typescript
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(username);
    navigate('/employees');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
```

## Step 5: Set Up Routing

1. Update `src/App.tsx`:
```typescript
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/" element={<Navigate to="/employees" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
```

## Step 6: Testing the Application

1. Start the development server:
```bash
npm run dev
```

2. Test the authentication flow:
   - Visit http://localhost:5173
   - You should be redirected to login
   - Enter any credentials
   - You should see the employee list

## Common Issues and Solutions

### Authentication Issues
- Problem: Infinite redirect loop
- Solution: Check AuthContext implementation and provider wrapping

### Permission Issues
- Problem: Cannot access protected routes
- Solution: Verify role assignment in login function

### Data Fetching Issues
- Problem: Data not loading
- Solution: Check fetch function implementation and error handling

## Next Steps

1. Add more features:
   - User profile management
   - Employee CRUD operations
   - Department management

2. Enhance security:
   - Implement proper authentication
   - Add token management
   - Secure API calls

3. Improve UI:
   - Add loading animations
   - Enhance error messages
   - Implement responsive design

## Best Practices

1. Component Organization:
   - Keep HOCs in separate directory
   - Use consistent naming conventions
   - Maintain clear component hierarchy

2. Type Safety:
   - Define interfaces for all props
   - Use proper TypeScript configurations
   - Implement proper error boundaries

3. Performance:
   - Implement proper memoization
   - Use React.memo where appropriate
   - Optimize re-renders

## Resources

- [React Documentation](https://reactjs.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Router Documentation](https://reactrouter.com/)

## Support

For issues and questions:
- Create an issue in the repository
- Check existing documentation
- Contact the development team
