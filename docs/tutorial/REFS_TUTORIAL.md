# React Refs Tutorial

This tutorial will guide you through using our React Refs implementation, from basic usage to advanced patterns.

## Table of Contents
1. [Getting Started](#getting-started)
2. [Basic Usage](#basic-usage)
3. [Advanced Patterns](#advanced-patterns)
4. [Best Practices](#best-practices)
5. [Troubleshooting](#troubleshooting)

## Getting Started

### Prerequisites
- Node.js 14+
- npm or yarn
- Basic React knowledge

### Installation
1. Clone the repository
```bash
git clone <repository-url>
cd your-project
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

## Basic Usage

### 1. Using the TextInput Component

The TextInput component is a reusable input field that supports ref forwarding:

```typescript
import React, { useRef } from 'react';
import { TextInput } from './components/refs/TextInput';

function MyForm() {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <TextInput
        ref={inputRef}
        label="Username"
        placeholder="Enter your username"
      />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```

### 2. Using the FocusableCard Component

FocusableCard is a container that can receive focus programmatically:

```typescript
import React, { useRef } from 'react';
import { FocusableCard } from './components/refs/FocusableCard';

function MyCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  const focusCard = () => {
    cardRef.current?.focus();
  };

  return (
    <div>
      <FocusableCard ref={cardRef}>
        <h2>My Interactive Card</h2>
        <p>This card can receive focus!</p>
      </FocusableCard>
      <button onClick={focusCard}>Focus Card</button>
    </div>
  );
}
```

## Advanced Patterns

### 1. Managing Multiple Refs

```typescript
function MultipleRefs() {
  const inputRef = useRef<HTMLInputElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const focusSequence = () => {
    // Focus input first
    inputRef.current?.focus();
    
    // Focus card after 1 second
    setTimeout(() => {
      cardRef.current?.focus();
    }, 1000);
  };

  return (
    <div>
      <TextInput ref={inputRef} label="Search" />
      <FocusableCard ref={cardRef}>
        <p>Content</p>
      </FocusableCard>
      <button onClick={focusSequence}>Start Focus Sequence</button>
    </div>
  );
}
```

### 2. Conditional Ref Assignment

```typescript
function ConditionalRef() {
  const inputRef = useRef<HTMLInputElement>(null);

  const assignRef = (condition: boolean) => {
    return condition ? inputRef : null;
  };

  return (
    <TextInput
      ref={assignRef(true)}
      label="Conditional Input"
    />
  );
}
```

## Best Practices

1. **Always Type Your Refs**
```typescript
// ✅ Good
const inputRef = useRef<HTMLInputElement>(null);

// ❌ Bad
const inputRef = useRef();
```

2. **Safe Ref Access**
```typescript
// ✅ Good
inputRef.current?.focus();

// ❌ Bad
inputRef.current.focus();
```

3. **Cleanup Effects**
```typescript
useEffect(() => {
  const element = inputRef.current;
  
  // Setup
  element?.addEventListener('focus', handleFocus);
  
  // Cleanup
  return () => {
    element?.removeEventListener('focus', handleFocus);
  };
}, []);
```

## Troubleshooting

### Common Issues

1. **Ref is undefined**
```typescript
// Solution: Check if ref is mounted
if (inputRef.current) {
  // Safe to use ref
  inputRef.current.focus();
}
```

2. **Focus not working**
```typescript
// Solution: Ensure element is focusable
<div
  ref={elementRef}
  tabIndex={0} // Add this
  role="button" // Add appropriate role
>
  Content
</div>
```

### Debug Tips

1. Log ref value:
```typescript
console.log('Ref value:', inputRef.current);
```

2. Check ref timing:
```typescript
useEffect(() => {
  console.log('Ref after mount:', inputRef.current);
}, []);
```

## Next Steps

- Explore the [Technical Documentation](../technical/REFS_TECHNICAL.md)
- Check out the main [Documentation](../README.md)
- Join our [Community Discord](https://discord.gg/your-server)

## Need Help?

- Open an issue on GitHub
- Check our FAQ section
- Contact support
