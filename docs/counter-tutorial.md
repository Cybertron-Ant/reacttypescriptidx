# Building a TypeScript Counter with useReducer: Step-by-Step Tutorial

This tutorial will guide you through creating a feature-rich counter component using React's useReducer hook with TypeScript.

## Prerequisites
- Basic knowledge of React and TypeScript
- Node.js and npm installed
- A React project with TypeScript setup

## Step 1: Setting Up the Types

First, create `src/types/counter.types.ts`:

```typescript
// Define the state interface
export interface CounterState {
  count: number;
  lastOperation: string;
  history: number[];
}

// Define action types
export enum CounterActionTypes {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  RESET = 'RESET',
  SET_VALUE = 'SET_VALUE'
}

// Define action interface
export interface CounterAction {
  type: CounterActionTypes;
  payload?: number;
}

// Create initial state
export const initialState: CounterState = {
  count: 0,
  lastOperation: 'Initial state',
  history: []
};
```

## Step 2: Creating the Reducer

Create `src/reducers/counter.reducer.ts`:

```typescript
import { CounterState, CounterAction, CounterActionTypes } from '../types/counter.types';

export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        lastOperation: 'Incremented',
        history: [...state.history, state.count + 1]
      };

    case CounterActionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        lastOperation: 'Decremented',
        history: [...state.history, state.count - 1]
      };

    // Add other cases...
  }
};
```

## Step 3: Building the Counter Component

Create `src/components/Counter.tsx`:

```typescript
import React, { useReducer } from 'react';
import { counterReducer } from '../reducers/counter.reducer';
import { initialState, CounterActionTypes } from '../types/counter.types';

const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  // Add handlers...
  
  return (
    // Add JSX...
  );
};
```

## Step 4: Adding Event Handlers

Add the following to your Counter component:

```typescript
const handleSetValue = (event: React.ChangeEvent<HTMLInputElement>) => {
  const value = parseInt(event.target.value) || 0;
  dispatch({ type: CounterActionTypes.SET_VALUE, payload: value });
};
```

## Step 5: Creating the UI

Add the JSX structure:

```tsx
return (
  <div className="flex flex-col items-center space-y-6">
    <h2 className="text-3xl font-bold text-gray-900">Counter with useReducer</h2>
    
    <div className="text-center">
      <h3 className="text-4xl font-bold text-indigo-600">{state.count}</h3>
      <p className="text-gray-500 mt-2">Last Operation: {state.lastOperation}</p>
    </div>

    {/* Add buttons and input... */}
  </div>
);
```

## Step 6: Styling with Tailwind CSS

Add button styles:

```tsx
<button 
  onClick={() => dispatch({ type: CounterActionTypes.INCREMENT })}
  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
>
  Increment
</button>
```

## Step 7: Adding History Display

Add the history section:

```tsx
<div className="w-full max-w-xs">
  <h4 className="text-lg font-semibold text-gray-700 mb-2">History:</h4>
  <div className="max-h-40 overflow-y-auto">
    <ul className="space-y-1">
      {state.history.map((value, index) => (
        <li 
          key={index}
          className="text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded"
        >
          Operation {index + 1}: {value}
        </li>
      ))}
    </ul>
  </div>
</div>
```

## Step 8: Integration

Update your App.tsx:

```tsx
import React from 'react';
import Counter from './components/Counter';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default App;
```

## Testing Your Implementation

1. Start your development server:
```bash
npm start
```

2. Test the following functionality:
   - Increment and decrement buttons
   - Reset functionality
   - Custom value input
   - History tracking
   - Responsive design

## Common Issues and Solutions

### Issue 1: Type Errors
If you encounter type errors, make sure:
- All interfaces are properly exported/imported
- Action types match the enum exactly
- Event handlers have proper TypeScript types

### Issue 2: State Updates
If state isn't updating properly:
- Check that you're not mutating state directly
- Verify action types in the reducer
- Confirm dispatch calls are correct

## Next Steps

1. Add Features:
   - Undo/Redo functionality
   - Custom step sizes
   - State persistence
   - Animation effects

2. Improvements:
   - Add error boundaries
   - Implement unit tests
   - Add keyboard shortcuts
   - Optimize performance

## Resources

- [React useReducer Documentation](https://reactjs.org/docs/hooks-reference.html#usereducer)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
