# React Router with Tailwind CSS Tutorial

This tutorial will guide you through creating a React application with TypeScript, React Router, and Tailwind CSS from scratch.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Project Setup](#project-setup)
- [Adding React Router](#adding-react-router)
- [Implementing Tailwind CSS](#implementing-tailwind-css)
- [Creating Components](#creating-components)
- [Styling the Application](#styling-the-application)
- [Testing and Deployment](#testing-and-deployment)

## Prerequisites
- Node.js and npm installed
- Basic knowledge of React and TypeScript
- Code editor (VS Code recommended)

## Project Setup

### 1. Create a New Vite Project
```bash
npm create vite@latest myapp -- --template react-ts
cd myapp
npm install
```

### 2. Install Dependencies
```bash
# Install React Router
npm install react-router-dom

# Install Tailwind CSS and its dependencies
npm install -D tailwindcss postcss autoprefixer
```

### 3. Initialize Tailwind CSS
```bash
npx tailwindcss init -p
```

## Adding React Router

### 1. Create Pages Directory
Create a `pages` directory in `src` and add page components:

```tsx
// src/pages/Home.tsx
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold">Welcome Home</h1>
      </div>
    </div>
  );
};

export default Home;
```

### 2. Set Up Router Configuration
Update your `App.tsx`:

```tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
```

## Implementing Tailwind CSS

### 1. Configure Tailwind
Update `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 2. Add Tailwind Directives
Create or update `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Creating Components

### 1. Navigation Component
Create `src/components/Navigation.tsx`:

```tsx
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
```

### 2. Page Components
Create page components with proper styling:

```tsx
// src/pages/About.tsx
const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-gray-600">Your about content here...</p>
        </div>
      </div>
    </div>
  );
};
```

## Styling the Application

### 1. Common Tailwind Patterns

#### Containers and Layout
```tsx
<div className="container mx-auto px-4">
  {/* Content here */}
</div>
```

#### Cards
```tsx
<div className="bg-white rounded-lg shadow-lg p-6">
  {/* Card content */}
</div>
```

#### Buttons
```tsx
<button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
  Click Me
</button>
```

#### Typography
```tsx
<h1 className="text-4xl font-bold text-gray-800">Title</h1>
<p className="text-lg text-gray-600 leading-relaxed">Paragraph</p>
```

### 2. Responsive Design
Use Tailwind's responsive prefixes:
```tsx
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

## Testing and Deployment

### 1. Running the Development Server
```bash
npm run dev
```

### 2. Building for Production
```bash
npm run build
```

### 3. Testing the Production Build
```bash
npm run preview
```

## Best Practices

### 1. Component Organization
- Keep components small and focused
- Use TypeScript interfaces for props
- Implement proper error boundaries

### 2. Styling Guidelines
- Use consistent spacing
- Follow mobile-first approach
- Maintain color consistency
- Use semantic HTML elements

### 3. Performance Tips
- Implement lazy loading for routes
- Optimize images
- Use proper caching strategies
- Minimize bundle size

## Troubleshooting

### Common Issues and Solutions

1. **Styles Not Applying**
   - Check Tailwind directives in index.css
   - Verify tailwind.config.js content paths
   - Clear cache and rebuild

2. **Router Not Working**
   - Ensure BrowserRouter is at the top level
   - Check route paths for typos
   - Verify component imports

3. **TypeScript Errors**
   - Install proper @types packages
   - Check tsconfig.json configuration
   - Use correct type annotations

## Next Steps
1. Add more routes and features
2. Implement authentication
3. Add state management
4. Write tests
5. Set up CI/CD pipeline

## Resources
- [React Router Documentation](https://reactrouter.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [Vite Documentation](https://vitejs.dev)
