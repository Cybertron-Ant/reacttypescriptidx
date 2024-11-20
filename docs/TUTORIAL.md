# React TypeScript Render Props Tutorial

This tutorial will guide you through implementing and using the Render Props pattern in React with TypeScript, from basic concepts to advanced implementations.

## Table of Contents
1. [Understanding Render Props](#understanding-render-props)
2. [Basic Implementation](#basic-implementation)
3. [TypeScript Integration](#typescript-integration)
4. [Advanced Patterns](#advanced-patterns)
5. [Best Practices](#best-practices)
6. [Troubleshooting](#troubleshooting)

## Understanding Render Props

### What are Render Props?
Render Props is a technique for sharing code between React components using a prop whose value is a function. The component with the render prop takes a function that returns a React element and calls it instead of implementing its own render logic.

### Why Use Render Props?
- Code reusability
- Separation of concerns
- Flexible component composition
- State sharing without inheritance

## Basic Implementation

### 1. Simple Mouse Tracker
```tsx
// Basic MouseTracker component
const MouseTracker: React.FC<{ children: (position: { x: number; y: number }) => React.ReactNode }> = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return children(position);
};

// Usage
<MouseTracker>
  {({ x, y }) => (
    <div>Mouse position: {x}, {y}</div>
  )}
</MouseTracker>
```

## TypeScript Integration

### 1. Defining Interfaces
```tsx
interface MousePosition {
  x: number;
  y: number;
}

interface MouseTrackerProps<T = {}> {
  children: (position: MousePosition & T) => React.ReactNode;
  additionalData?: T;
}
```

### 2. Generic Types
```tsx
// Enhanced MouseTracker with generic types
const MouseTracker = <T extends object>({ 
  children, 
  additionalData 
}: MouseTrackerProps<T>) => {
  // ... implementation
};

// Usage with additional data
<MouseTracker<{ color: string }> 
  additionalData={{ color: 'blue' }}
>
  {({ x, y, color }) => (
    <div style={{ color }}>
      Position: {x}, {y}
    </div>
  )}
</MouseTracker>
```

## Advanced Patterns

### 1. Data Fetching with Render Props
```tsx
interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

const DataFetcher = <T,>({ 
  url, 
  children 
}: { 
  url: string; 
  children: (state: FetchState<T>) => React.ReactNode;
}) => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setState({ data, loading: false, error: null });
      } catch (error) {
        setState({ 
          data: null, 
          loading: false, 
          error: error instanceof Error ? error : new Error('Unknown error')
        });
      }
    };

    fetchData();
  }, [url]);

  return children(state);
};

// Usage
interface User {
  id: number;
  name: string;
}

<DataFetcher<User> url="/api/user">
  {({ data, loading, error }) => {
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!data) return null;
    return <div>Welcome, {data.name}!</div>;
  }}
</DataFetcher>
```

### 2. Composing Multiple Render Props
```tsx
const UserMouseTracker = () => (
  <DataFetcher<User> url="/api/user">
    {({ data: user }) => (
      <MouseTracker>
        {({ x, y }) => (
          <div>
            User {user?.name} is at position ({x}, {y})
          </div>
        )}
      </MouseTracker>
    )}
  </DataFetcher>
);
```

## Best Practices

### 1. Prop Naming
- Use descriptive names for render prop functions
- Consider using `children` for single render props
- Use specific names for multiple render props

### 2. Performance Optimization
```tsx
// Use useCallback for stable render functions
const renderMousePosition = useCallback(({ x, y }: MousePosition) => (
  <div>Position: {x}, {y}</div>
), []);

<MouseTracker>
  {renderMousePosition}
</MouseTracker>
```

### 3. Error Boundaries
```tsx
class RenderPropErrorBoundary extends React.Component<{
  children: React.ReactNode;
  fallback: React.ReactNode;
}> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
```

## Troubleshooting

### Common Issues and Solutions

1. **Type Errors**
   - Ensure proper interface definitions
   - Check generic type constraints
   - Verify function signatures

2. **Performance Issues**
   - Memoize render functions
   - Use proper dependency arrays
   - Avoid unnecessary re-renders

3. **Memory Leaks**
   - Clean up event listeners
   - Handle component unmounting
   - Cancel pending operations

### Debugging Tips
1. Use React DevTools
2. Log render prop arguments
3. Implement proper error boundaries
4. Use TypeScript strict mode

Need help? Check out:
- [React Documentation](https://reactjs.org/docs/render-props.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/handbook/react.html)
- [React TypeScript Cheatsheet](https://github.com/typescript-cheatsheets/react)
