# React Component Lifecycle Tutorial

Welcome to this hands-on tutorial about React component lifecycle using hooks! We'll walk through creating a component that demonstrates all major lifecycle events.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Setup](#setup)
3. [Basic Component Structure](#basic-component-structure)
4. [Understanding Lifecycle Events](#understanding-lifecycle-events)
5. [Interactive Examples](#interactive-examples)
6. [Debugging Guide](#debugging-guide)

## Prerequisites
- Basic knowledge of React
- Node.js installed
- Code editor (VS Code recommended)
- Browser developer tools

## Setup

1. Start by creating a new component file:
```bash
mkdir src/components/lifecycle
touch src/components/lifecycle/LifecycleDemo.tsx
```

2. Install dependencies (if not already present):
```bash
npm install react @types/react
```

## Basic Component Structure

Let's build our component step by step:

### 1. Initial Component Setup
```typescript
import React, { useState, useEffect } from 'react';

const LifecycleDemo: React.FC = () => {
    return (
        <div>
            <h1>Lifecycle Demo</h1>
        </div>
    );
};

export default LifecycleDemo;
```

### 2. Adding State
```typescript
const LifecycleDemo: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const [data, setData] = useState<string>('');
    const [isVisible, setIsVisible] = useState<boolean>(true);

    // ... component JSX
};
```

## Understanding Lifecycle Events

### 1. Mounting Phase
The component's birth! Add this effect:
```typescript
useEffect(() => {
    console.log('🟢 Component Mounted');
    
    // Simulating initialization
    const fetchData = async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setData('Initial data loaded');
    };
    
    fetchData();

    // Cleanup on unmount
    return () => {
        console.log('🔴 Component Will Unmount');
    };
}, []); // Empty array = run once on mount
```

### 2. Update Phase
Monitor changes to our state:
```typescript
useEffect(() => {
    console.log('🔄 Count updated:', count);
    
    return () => {
        console.log('Cleaning up previous count effect');
    };
}, [count]); // Run when count changes
```

## Interactive Examples

### 1. Counter Implementation
```typescript
const handleIncrement = () => setCount(prev => prev + 1);

return (
    <div>
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>
            Increment
        </button>
    </div>
);
```

### 2. Data Updates
```typescript
const handleUpdateData = () => {
    setData(`Updated data: ${new Date().toLocaleTimeString()}`);
};

return (
    <div>
        <p>Data: {data}</p>
        <button onClick={handleUpdateData}>
            Update Data
        </button>
    </div>
);
```

### 3. Unmounting Example
```typescript
const handleToggleVisibility = () => setIsVisible(prev => !prev);

return (
    <div>
        <button onClick={handleToggleVisibility}>
            {isVisible ? 'Hide' : 'Show'} Content
        </button>
        {isVisible && (
            <div>
                <p>This content can be unmounted!</p>
            </div>
        )}
    </div>
);
```

## Debugging Guide

### Using Console Logs
1. Open your browser's developer tools (F12)
2. Go to the Console tab
3. You should see:
   - 🟢 When the component mounts
   - 🔄 When state updates occur
   - 🔴 When the component unmounts

### Common Issues and Solutions

#### 1. Effect Runs Too Often
Problem:
```typescript
// Bad: No dependency array
useEffect(() => {
    console.log('This runs on every render!');
});
```

Solution:
```typescript
// Good: With dependency array
useEffect(() => {
    console.log('This runs only when needed!');
}, [/* dependencies */]);
```

#### 2. Cleanup Functions
Problem:
```typescript
// Bad: No cleanup
useEffect(() => {
    const timer = setInterval(() => {
        // Some operation
    }, 1000);
}, []);
```

Solution:
```typescript
// Good: With cleanup
useEffect(() => {
    const timer = setInterval(() => {
        // Some operation
    }, 1000);
    
    return () => clearInterval(timer);
}, []);
```

## Exercises

1. Add a new piece of state and effect:
   - Create a `windowWidth` state
   - Add an effect to update it on window resize
   - Clean up the event listener on unmount

2. Implement a data fetching scenario:
   - Add loading state
   - Handle errors
   - Clean up if component unmounts during fetch

3. Create a custom hook:
   - Extract the counter logic into a `useCounter` hook
   - Add increment and decrement functionality
   - Practice hook composition

## Next Steps

1. Explore more complex lifecycle scenarios:
   - API integrations
   - WebSocket connections
   - Animation effects

2. Learn about performance optimization:
   - `useMemo`
   - `useCallback`
   - `React.memo`

3. Practice debugging:
   - Use React Developer Tools
   - Implement error boundaries
   - Add comprehensive logging

## Additional Resources

- [React Hooks Documentation](https://reactjs.org/docs/hooks-intro.html)
- [useEffect Complete Guide](https://overreacted.io/a-complete-guide-to-useeffect/)
- [React TypeScript Cheatsheet](https://github.com/typescript-cheatsheets/react)
