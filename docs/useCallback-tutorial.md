# useCallback Tutorial: Building an Optimized Counter Component

This tutorial will guide you through creating a performance-optimized Counter component using React's `useCallback` hook and TypeScript.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Getting Started](#getting-started)
3. [Step-by-Step Implementation](#step-by-step-implementation)
4. [Testing and Verification](#testing-and-verification)
5. [Common Pitfalls](#common-pitfalls)

## Prerequisites
- Basic knowledge of React and TypeScript
- Node.js and npm installed
- A React TypeScript project set up

## Getting Started

### Project Setup
If you haven't already, create a new React TypeScript project:
```bash
npx create-react-app my-app --template typescript
cd my-app
```

### Required Dependencies
Make sure you have these dependencies in your `package.json`:
```json
{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "typescript": "^4.8.0"
  }
}
```

## Step-by-Step Implementation

### 1. Create the CounterButton Component

First, create a memoized button component (`CounterButton.tsx`):

```typescript
import React, { memo } from 'react';

interface CounterButtonProps {
  onClick: () => void;
  label: string;
}

const CounterButton = memo(({ onClick, label }) => {
  console.log(`CounterButton rendered: ${label}`);
  
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      {label}
    </button>
  );
});

export default CounterButton;
```

### 2. Implement the Counter Component

Create the main Counter component (`Counter.tsx`) with useCallback:

```typescript
import React, { useState, useCallback } from 'react';
import CounterButton from './CounterButton';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  const handleIncrement = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount(prev => prev - 1);
  }, []);

  return (
    <div className="p-4">
      <h2>Count: {count}</h2>
      <div className="space-x-2">
        <CounterButton onClick={handleDecrement} label="Decrease" />
        <CounterButton onClick={handleIncrement} label="Increase" />
      </div>
    </div>
  );
};

export default Counter;
```

### 3. Update App Component

Modify your `App.tsx` to use the Counter component:

```typescript
import React from 'react';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <h1 className="text-center text-3xl mb-8">useCallback Demo</h1>
      <Counter />
    </div>
  );
}

export default App;
```

## Testing and Verification

### 1. Performance Testing
Open your browser's console to observe render behavior:
1. Click the increment/decrement buttons
2. Notice that buttons only re-render when necessary
3. Verify that toggling unrelated state doesn't trigger button re-renders

### 2. React DevTools
Use React DevTools to:
1. Monitor component renders
2. Inspect memoization effectiveness
3. Verify callback stability

### 3. Common Tests to Run
```typescript
// Test 1: Basic functionality
- Click increment button → count should increase
- Click decrement button → count should decrease

// Test 2: Render optimization
- Toggle other state → buttons should not re-render
- Check console logs → should only see logs when buttons actually need to update
```

## Common Pitfalls

### 1. Dependency Array Issues
❌ **Wrong:**
```typescript
const handleIncrement = useCallback(() => {
  setCount(count + 1);
}, []); // Missing 'count' dependency
```

✅ **Correct:**
```typescript
const handleIncrement = useCallback(() => {
  setCount(prev => prev + 1);
}, []); // No dependencies needed with function updater
```

### 2. Unnecessary useCallback
❌ **Wrong:**
```typescript
// Don't use useCallback for one-off event handlers
const handleOneTime = useCallback(() => {
  console.log('one time');
}, []);
```

✅ **Correct:**
```typescript
// Use useCallback when passing callbacks to memoized children
const handleFrequent = useCallback(() => {
  setCount(prev => prev + 1);
}, []);
```

### 3. Missing memo
❌ **Wrong:**
```typescript
const Button = ({ onClick, label }) => {
  return <button onClick={onClick}>{label}</button>;
};
```

✅ **Correct:**
```typescript
const Button = memo(({ onClick, label }) => {
  return <button onClick={onClick}>{label}</button>;
});
```

## Best Practices Summary

1. **Always use function updater form** with setState in callbacks
2. **Keep dependency arrays minimal** but complete
3. **Use React.memo** for components receiving callbacks
4. **Add console.logs** during development to verify optimization
5. **Remove unnecessary useCallback** usage where memoization isn't beneficial

## Next Steps

1. **Experiment with Dependencies**
   - Try adding dependencies to useCallback
   - Observe how this affects render behavior

2. **Add Complex State Updates**
   - Implement callbacks that update multiple states
   - Practice optimizing more complex scenarios

3. **Performance Profiling**
   - Use React DevTools Profiler
   - Measure and optimize render performance
