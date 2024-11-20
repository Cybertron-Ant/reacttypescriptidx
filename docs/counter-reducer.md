# Counter Component with useReducer Documentation

## Overview
The Counter component is a TypeScript-based React implementation that demonstrates the usage of the `useReducer` hook for state management. It provides a comprehensive example of managing complex state with TypeScript type safety.

## Architecture

### Directory Structure
```
src/
├── components/
│   └── Counter.tsx
├── reducers/
│   └── counter.reducer.ts
└── types/
    └── counter.types.ts
```

### Type Definitions
Located in `types/counter.types.ts`

#### CounterState Interface
```typescript
interface CounterState {
  count: number;        // Current counter value
  lastOperation: string; // Description of the last operation
  history: number[];    // Array of historical values
}
```

#### Action Types
```typescript
enum CounterActionTypes {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  RESET = 'RESET',
  SET_VALUE = 'SET_VALUE'
}
```

### Reducer Implementation
Located in `reducers/counter.reducer.ts`

The reducer handles four types of actions:
- `INCREMENT`: Increases count by 1
- `DECREMENT`: Decreases count by 1
- `RESET`: Sets count to 0
- `SET_VALUE`: Sets count to a specific value

Each action updates:
1. The current count
2. The last operation description
3. The history array

## Component Features

### State Management
- Uses React's `useReducer` hook
- Maintains immutable state updates
- Tracks operation history
- Records last performed operation

### UI Elements
- Display area for current count
- Operation buttons (Increment, Decrement, Reset)
- Input field for custom value setting
- History list with scrollable interface

### Styling
- Modern UI using Tailwind CSS
- Responsive design
- Interactive hover effects
- Clean typography and spacing

## Props
The Counter component is self-contained and doesn't accept any props.

## Usage Example
```tsx
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}
```

## Type Safety
- Full TypeScript implementation
- Type-safe action handling
- Proper interface definitions
- Strict type checking for state updates

## Performance Considerations
- Efficient state updates using reducer pattern
- Memoized event handlers
- Optimized rendering with proper state management
- Limited history size for memory efficiency

## Best Practices Implemented
1. Separation of concerns (types, logic, UI)
2. Type safety with TypeScript
3. Immutable state updates
4. Clean code architecture
5. Comprehensive documentation
6. Modern UI/UX principles

## Contributing
When contributing to this component:
1. Maintain TypeScript type safety
2. Follow the existing architecture
3. Update documentation as needed
4. Add appropriate tests for new features

## License
MIT License - Feel free to use and modify as needed.
