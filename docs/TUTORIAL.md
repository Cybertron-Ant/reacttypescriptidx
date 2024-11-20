# React Component Lifecycle & Props/State Tutorial

This tutorial will guide you through understanding React component lifecycle methods and the differences between Props and State using our LifecycleDemo component.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Getting Started](#getting-started)
3. [Understanding Props](#understanding-props)
4. [Working with State](#working-with-state)
5. [Lifecycle Methods in Action](#lifecycle-methods-in-action)
6. [Hands-on Exercises](#hands-on-exercises)

## Prerequisites
- Basic knowledge of React
- Node.js installed
- TypeScript basics
- Code editor (VS Code recommended)

## Getting Started

### 1. Clone and Setup
```bash
git clone <repository-url>
cd reacttypescriptidx
npm install
```

### 2. Run the Application
```bash
npm start
```
Open your browser's console (F12) to see lifecycle method logs.

## Understanding Props

### What are Props?
Props are immutable properties passed to a component from its parent. They're like function parameters.

### Example in Our Component
```typescript
// Parent component (App.tsx)
<LifecycleDemo 
    title="Component Lifecycle Example"
    initialCount={0}
/>

// Child component (LifecycleDemo.tsx)
interface LifecycleDemoProps {
    title: string;
    initialCount: number;
}
```

### Exercise 1: Modifying Props
1. Open `App.tsx`
2. Change the `title` prop
3. Change `initialCount` to different numbers
4. Observe how the component updates

## Working with State

### What is State?
State is mutable data managed within a component. It can be updated using `setState()`.

### Example in Our Component
```typescript
interface LifecycleDemoState {
    count: number;
    lastUpdated: Date;
    mounted: boolean;
}
```

### Exercise 2: State Updates
1. Click the increment/decrement buttons
2. Watch the counter change
3. Observe the lastUpdated timestamp
4. Check console logs for state updates

## Lifecycle Methods in Action

### 1. Constructor
```typescript
constructor(props: LifecycleDemoProps) {
    super(props);
    this.state = {
        count: props.initialCount,
        lastUpdated: new Date(),
        mounted: false
    };
}
```
- Called when component is created
- Initialize state here

### 2. ComponentDidMount
```typescript
componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
    this.setState({ mounted: true });
}
```
- Called after component mounts
- Perfect for side effects

### 3. ComponentDidUpdate
```typescript
componentDidUpdate(prevProps: LifecycleDemoProps, prevState: LifecycleDemoState) {
    if (prevState.count !== this.state.count) {
        console.log('Count changed!');
    }
}
```
- Called after updates
- Compare previous and current values

### 4. ComponentWillUnmount
```typescript
componentWillUnmount() {
    if (this.timer) {
        clearInterval(this.timer);
    }
}
```
- Called before removal
- Clean up resources

### Exercise 3: Lifecycle Exploration
1. Open browser console
2. Mount/unmount component using toggle button
3. Observe lifecycle method logs
4. Try updating props and state

## Hands-on Exercises

### Exercise 4: Add New Features
Try adding these features to the component:

1. Add Reset Button
```typescript
// Add to LifecycleDemoState
interface LifecycleDemoState {
    // ... existing state
    resetCount: number;
}

// Add reset method
handleReset = () => {
    this.setState({
        count: this.props.initialCount,
        resetCount: this.state.resetCount + 1
    });
}

// Add button to render
<button onClick={this.handleReset}>Reset</button>
```

2. Add Counter History
```typescript
// Add to state
interface LifecycleDemoState {
    // ... existing state
    history: number[];
}

// Update handleIncrement
handleIncrement = () => {
    this.setState(prevState => ({
        count: prevState.count + 1,
        history: [...prevState.history, prevState.count + 1]
    }));
}
```

### Exercise 5: Style Customization
1. Open `LifecycleDemo.css`
2. Modify the styles:
```css
.lifecycle-demo {
    /* Try different values */
    background-color: #f0f0f0;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.counter button {
    /* Customize button appearance */
    background-color: #4CAF50;
    transition: transform 0.2s;
}

.counter button:hover {
    transform: scale(1.1);
}
```

## Common Pitfalls

### 1. Direct State Mutation
❌ Wrong:
```typescript
this.state.count += 1;
```

✅ Correct:
```typescript
this.setState(prevState => ({
    count: prevState.count + 1
}));
```

### 2. Side Effects in Constructor
❌ Wrong:
```typescript
constructor(props) {
    super(props);
    fetch('api/data');  // Don't do this
}
```

✅ Correct:
```typescript
componentDidMount() {
    fetch('api/data');  // Do it here
}
```

## Best Practices Summary
1. Always use setState for state updates
2. Clean up side effects in componentWillUnmount
3. Use TypeScript interfaces for type safety
4. Keep components focused and single-purpose
5. Document your code

## Next Steps
1. Try implementing error boundaries
2. Add prop validation
3. Implement more complex state updates
4. Add unit tests
5. Explore React hooks (functional components)

## Additional Resources
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React TypeScript Cheatsheet](https://github.com/typescript-cheatsheets/react)
