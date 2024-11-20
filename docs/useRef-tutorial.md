# useRef Tutorial: A Practical Guide

## Introduction
This tutorial will guide you through implementing and using the `useRef` hook in React with TypeScript. We'll cover common use cases and best practices through hands-on examples.

## Prerequisites
- Basic understanding of React and TypeScript
- Node.js and npm installed
- A React TypeScript project set up

## Table of Contents
1. [Basic Implementation](#basic-implementation)
2. [Advanced Usage](#advanced-usage)
3. [Common Patterns](#common-patterns)
4. [Troubleshooting](#troubleshooting)

## Basic Implementation

### Step 1: Creating a Simple Input Focus Component

```typescript
import React, { useRef } from 'react';

const FocusInput: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    
    const handleFocus = () => {
        inputRef.current?.focus();
    };
    
    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={handleFocus}>Focus Input</button>
        </div>
    );
};
```

### Step 2: Adding Value Persistence

```typescript
const renderCount = useRef<number>(0);

useEffect(() => {
    renderCount.current += 1;
    console.log(`Component rendered ${renderCount.current} times`);
});
```

## Advanced Usage

### Example 1: Previous Value Pattern
```typescript
function usePrevious<T>(value: T) {
    const ref = useRef<T>();
    
    useEffect(() => {
        ref.current = value;
    }, [value]);
    
    return ref.current;
}

// Usage
const Counter: React.FC = () => {
    const [count, setCount] = useState(0);
    const previousCount = usePrevious(count);
    
    return (
        <div>
            <p>Current: {count}</p>
            <p>Previous: {previousCount}</p>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
        </div>
    );
};
```

### Example 2: Interval Management
```typescript
function IntervalExample() {
    const intervalRef = useRef<number>();
    
    useEffect(() => {
        intervalRef.current = window.setInterval(() => {
            console.log('Interval triggered');
        }, 1000);
        
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);
}
```

## Common Patterns

### 1. Form Input Management
```typescript
const FormExample: React.FC = () => {
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({
            firstName: firstNameRef.current?.value,
            lastName: lastNameRef.current?.value
        });
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input ref={firstNameRef} placeholder="First Name" />
            <input ref={lastNameRef} placeholder="Last Name" />
            <button type="submit">Submit</button>
        </form>
    );
};
```

### 2. Scroll Position Tracking
```typescript
const ScrollTracker: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    
    const scrollToTop = () => {
        containerRef.current?.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    return (
        <div 
            ref={containerRef} 
            style={{ height: '200px', overflow: 'auto' }}
        >
            {/* Content */}
            <button onClick={scrollToTop}>Scroll to Top</button>
        </div>
    );
};
```

## Troubleshooting

### Common Issues and Solutions

1. **Null Reference Errors**
   ```typescript
   // ❌ Wrong
   inputRef.current.focus();
   
   // ✅ Correct
   inputRef.current?.focus();
   ```

2. **Type Mismatches**
   ```typescript
   // ❌ Wrong
   const ref = useRef();
   
   // ✅ Correct
   const ref = useRef<HTMLInputElement>(null);
   ```

3. **Re-render Issues**
   ```typescript
   // ❌ Wrong: Will cause unnecessary re-renders
   const [count, setCount] = useState(0);
   
   // ✅ Correct: Use useRef for values that don't need to trigger re-renders
   const count = useRef(0);
   ```

## Best Practices Summary

1. Always specify TypeScript generics
2. Use optional chaining when accessing .current
3. Initialize DOM refs with null
4. Use useRef for values that shouldn't trigger re-renders
5. Clean up intervals and timeouts in useEffect cleanup functions

## Next Steps
- Experiment with combining useRef with other hooks
- Try implementing more complex DOM manipulations
- Practice building custom hooks using useRef
- Explore integration with third-party libraries
