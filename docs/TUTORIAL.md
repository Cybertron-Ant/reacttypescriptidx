# Tailwind CSS in React TypeScript Tutorial

This tutorial will guide you through using Tailwind CSS in your React TypeScript project, from basic concepts to advanced patterns.

## Table of Contents
1. [Getting Started](#getting-started)
2. [Basic Concepts](#basic-concepts)
3. [Responsive Design](#responsive-design)
4. [Custom Components](#custom-components)
5. [Advanced Patterns](#advanced-patterns)
6. [Troubleshooting](#troubleshooting)
7. [Functional Components](#functional-components)

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

## Functional Components

### 1. Define TypeScript Interfaces
Always define interfaces for your props:

```typescript
interface Feature {
  id: number;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
}
```

### 2. Implement Functional Components
Use the React.FC type and implement the component:

```tsx
const FeatureGrid: React.FC<FeatureGridProps> = ({ features }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature) => (
        <FeatureCard
          key={feature.id}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};
```

### 3. Add Component Documentation
Use JSDoc comments for better documentation:

```tsx
/**
 * FeatureGrid Component
 * 
 * Displays a responsive grid of feature cards
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Feature[]} props.features - Array of features to display
 */
const FeatureGrid: React.FC<FeatureGridProps> = ...
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
