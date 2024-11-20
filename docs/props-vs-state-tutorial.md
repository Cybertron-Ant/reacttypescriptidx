# Props vs State Tutorial

Welcome to this hands-on tutorial about Props and State in React with TypeScript! This tutorial will walk you through understanding and implementing these fundamental React concepts.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Getting Started](#getting-started)
3. [Understanding State](#understanding-state)
4. [Working with Props](#working-with-props)
5. [Combining Props and State](#combining-props-and-state)
6. [Exercises](#exercises)

## Prerequisites
- Basic knowledge of React
- Node.js installed
- TypeScript basics
- Code editor (VS Code recommended)

## Getting Started

### Setup
1. Clone the repository:
```bash
git clone <repository-url>
cd reacttypescriptidx
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

## Understanding State

### What is State?
State is a component's internal data that can change over time. Let's look at our `StatefulCounter` component:

```typescript
const StatefulCounter: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    
    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);
    
    return (
        // Component JSX
    );
};
```

### Exercise 1: Create a Toggle Component
Create a new component that uses state to toggle between two states:

1. Create `ToggleButton.tsx`:
```typescript
import React, { useState } from 'react';

const ToggleButton: React.FC = () => {
    const [isOn, setIsOn] = useState(false);
    
    return (
        <button onClick={() => setIsOn(!isOn)}>
            {isOn ? 'ON' : 'OFF'}
        </button>
    );
};
```

## Working with Props

### What are Props?
Props are read-only properties passed to components. Let's examine our `DisplayMessage` component:

```typescript
interface DisplayMessageProps {
    message: string;
    author: string;
    timestamp?: Date;
}

const DisplayMessage: React.FC<DisplayMessageProps> = ({ message, author, timestamp }) => {
    return (
        // Component JSX
    );
};
```

### Exercise 2: Create a Profile Card
Create a component that receives user data through props:

```typescript
interface ProfileCardProps {
    name: string;
    role: string;
    avatar?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, role, avatar }) => {
    return (
        <div className="card">
            {avatar && <img src={avatar} alt={name} />}
            <h3>{name}</h3>
            <p>{role}</p>
        </div>
    );
};
```

## Combining Props and State

### Parent-Child Communication
Learn how state and props work together using our `ParentComponent`:

```typescript
const ParentComponent: React.FC = () => {
    const [message, setMessage] = useState<string>('Hello!');
    
    return (
        <div>
            <button onClick={() => setMessage('Updated!')}>
                Update Message
            </button>
            <DisplayMessage message={message} author="User" />
        </div>
    );
};
```

### Exercise 3: Create a Todo List
Build a todo list that combines props and state:

1. Create the Todo interface:
```typescript
interface Todo {
    id: number;
    text: string;
    completed: boolean;
}
```

2. Create TodoList component:
```typescript
const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    
    const addTodo = (text: string) => {
        setTodos([...todos, { id: Date.now(), text, completed: false }]);
    };
    
    return (
        <div>
            <TodoForm onAdd={addTodo} />
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    );
};
```

## Exercises

### Practice Exercise 1: Theme Switcher
Create a theme switcher that:
- Uses state to track the current theme
- Passes theme data through props
- Allows toggling between light and dark themes

### Practice Exercise 2: Shopping Cart
Build a shopping cart that:
- Maintains cart items in state
- Passes item data through props
- Calculates total price
- Allows adding/removing items

### Practice Exercise 3: Form with Validation
Create a form that:
- Uses state for form fields
- Passes validation rules as props
- Shows error messages
- Handles form submission

## Best Practices

### State Management
1. Keep state as close as possible to where it's used
2. Use TypeScript types for state
3. Avoid redundant state

### Props Usage
1. Define clear interfaces
2. Use optional props when appropriate
3. Document prop requirements

## Conclusion
You've learned:
- How to use state for internal component data
- How to pass data through props
- How to combine props and state effectively
- TypeScript integration with React

## Next Steps
1. Try the practice exercises
2. Explore more complex state management
3. Learn about React Context
4. Study React performance optimization

## Resources
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React TypeScript Cheatsheet](https://github.com/typescript-cheatsheets/react)
