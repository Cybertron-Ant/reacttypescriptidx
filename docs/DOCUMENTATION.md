# React Component Lifecycle & Props/State Documentation

## Overview
This documentation covers the implementation of a React component that demonstrates component lifecycle methods and the differences between Props and State. The implementation uses TypeScript and includes comprehensive examples of React's core concepts.

## Table of Contents
- [Component Structure](#component-structure)
- [Props](#props)
- [State](#state)
- [Lifecycle Methods](#lifecycle-methods)
- [Event Handlers](#event-handlers)
- [Styling](#styling)
- [TypeScript Interfaces](#typescript-interfaces)

## Component Structure

### LifecycleDemo Component
The main component demonstrating React lifecycle methods and state management.

```typescript
class LifecycleDemo extends Component<LifecycleDemoProps, LifecycleDemoState>
```

### File Structure
```
src/
├── components/
│   └── LifecycleDemo/
│       ├── LifecycleDemo.tsx
│       └── LifecycleDemo.css
└── App.tsx
```

## Props

### Interface Definition
```typescript
interface LifecycleDemoProps {
    initialCount: number;
    title: string;
}
```

### Available Props
| Prop | Type | Description |
|------|------|-------------|
| initialCount | number | Initial value for the counter |
| title | string | Title displayed at the top of the component |

## State

### Interface Definition
```typescript
interface LifecycleDemoState {
    count: number;
    lastUpdated: Date;
    mounted: boolean;
}
```

### State Properties
| Property | Type | Description |
|----------|------|-------------|
| count | number | Current counter value |
| lastUpdated | Date | Timestamp of last update |
| mounted | boolean | Component mount status |

## Lifecycle Methods

### Constructor
```typescript
constructor(props: LifecycleDemoProps)
```
- First lifecycle method called
- Initializes state
- Receives props as parameter

### ComponentDidMount
```typescript
componentDidMount()
```
- Called after component mounts
- Sets up timer
- Updates mounted status

### ComponentDidUpdate
```typescript
componentDidUpdate(prevProps: LifecycleDemoProps, prevState: LifecycleDemoState)
```
- Called after updates
- Compares previous and current props/state
- Logs changes

### ComponentWillUnmount
```typescript
componentWillUnmount()
```
- Called before unmounting
- Cleans up timer
- Performs cleanup tasks

## Event Handlers

### handleIncrement
```typescript
handleIncrement = () => void
```
Increases counter by 1

### handleDecrement
```typescript
handleDecrement = () => void
```
Decreases counter by 1

### tick
```typescript
tick = () => void
```
Updates lastUpdated timestamp every second

## Styling

### CSS Classes
| Class | Purpose |
|-------|---------|
| .lifecycle-demo | Main container styling |
| .status | Status display section |
| .counter | Counter controls section |
| .explanation | Documentation section |

## TypeScript Interfaces

### Props Interface
```typescript
interface LifecycleDemoProps {
    initialCount: number;
    title: string;
}
```

### State Interface
```typescript
interface LifecycleDemoState {
    count: number;
    lastUpdated: Date;
    mounted: boolean;
}
```

## Usage Example

```typescript
import LifecycleDemo from './components/LifecycleDemo/LifecycleDemo';

function App() {
    return (
        <LifecycleDemo 
            title="Component Lifecycle Example"
            initialCount={0}
        />
    );
}
```

## Browser Console Output
The component logs lifecycle events to the console:
1. Constructor called
2. Render called
3. ComponentDidMount called
4. ComponentDidUpdate called (when props/state change)
5. ComponentWillUnmount called (on cleanup)

## Best Practices
1. Always clean up side effects in ComponentWillUnmount
2. Use TypeScript interfaces for type safety
3. Keep state updates immutable
4. Document component behavior
5. Implement error boundaries for production use

## Notes
- Timer updates every second
- Component can be unmounted/mounted to demonstrate lifecycle
- All state updates use the safe setState pattern
- CSS uses modern flexbox layout
- Fully typed with TypeScript
