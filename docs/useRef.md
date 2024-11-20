# useRef Documentation

## Overview
The `useRef` hook is a powerful feature in React that provides a way to persist values between renders and directly access DOM elements. This documentation covers the implementation and usage of useRef in our React TypeScript application.

## Table of Contents
- [Implementation Details](#implementation-details)
- [Component Structure](#component-structure)
- [API Reference](#api-reference)
- [Best Practices](#best-practices)
- [Common Use Cases](#common-use-cases)

## Implementation Details

### FocusInput Component
The main component demonstrating useRef functionality is located at `src/components/FocusInput/FocusInput.tsx`.

```typescript
const inputRef = useRef<HTMLInputElement>(null);
const renderCount = useRef<number>(0);
```

### Key Features
1. **DOM Reference Management**
   - Direct access to input element
   - Programmatic focus control
   - Type-safe implementation with TypeScript

2. **Render Count Tracking**
   - Persistent value storage
   - Non-reactive state management
   - Performance optimization

3. **Auto-focus Functionality**
   - Automatic focus on mount
   - Manual focus control
   - Accessibility considerations

## Component Structure

```
src/
├── components/
│   └── FocusInput/
│       └── FocusInput.tsx
└── App.tsx
```

## API Reference

### FocusInput Component

#### Props
The component currently accepts no props but can be extended to include:
- `autoFocus?: boolean`
- `placeholder?: string`
- `onFocus?: () => void`

#### Hooks Used
1. `useRef<HTMLInputElement>`
   - Purpose: DOM element reference
   - Type: `RefObject<HTMLInputElement>`

2. `useRef<number>`
   - Purpose: Render count tracking
   - Type: `MutableRefObject<number>`

#### Methods
- `handleFocusClick(): void`
  - Triggers input focus programmatically
  - Safe null checking with optional chaining

## Best Practices

1. **Type Safety**
   ```typescript
   const inputRef = useRef<HTMLInputElement>(null);
   ```
   - Always specify generic type for useRef
   - Use null as initial value for DOM refs

2. **Null Checking**
   ```typescript
   inputRef.current?.focus();
   ```
   - Use optional chaining
   - Avoid force unwrapping

3. **Performance Considerations**
   - Use useRef for values that shouldn't trigger re-renders
   - Prefer useRef over state for mutable values that don't affect rendering

## Common Use Cases

1. **DOM Access**
   - Form input focus management
   - Scroll position control
   - Media element control

2. **Value Persistence**
   - Counter tracking
   - Previous value comparison
   - Interval/timeout IDs

3. **Integration Examples**
   - Form libraries
   - Animation frameworks
   - Third-party DOM manipulation
