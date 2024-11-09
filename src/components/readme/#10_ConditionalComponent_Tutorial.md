
# Vite + React + TypeScript: Conditional Rendering with ConditionalComponent Tutorial

## Introduction

In this tutorial, we added a new component named `ConditionalComponent.tsx` to demonstrate how to implement conditional rendering in React using TypeScript. Conditional rendering is a core concept in React that allows us to render different components or elements based on specific conditions.

### Importance in Real-World Applications

Conditional rendering is crucial for building dynamic and responsive user interfaces. It offers several benefits:

1. **Dynamic Content Display**: Applications often need to show or hide certain components based on user actions, application state, or data fetched from APIs.
2. **Improved User Experience**: By conditionally rendering content, we can provide relevant information to users based on context, improving the overall user experience.
3. **Code Simplification**: Instead of creating multiple pages or components, conditional rendering allows us to switch between components based on a single condition, reducing code duplication.

## Changes Made

### 1. Created `ConditionalComponent.tsx` for Conditional Rendering

The `ConditionalComponent.tsx` conditionally renders either the `Fruits` component or the `Hello` component based on a boolean prop.

#### `src/components/ConditionalComponent.tsx`

```tsx
import React from 'react';
import Fruits from './Fruits';
import Hello from './Hello';

// Define the props interface for ConditionalComponent
interface ConditionalComponentProps {
  readonly renderFruits: boolean; // Flag to decide which component to render
}

// Define the ConditionalComponent using TypeScript
const ConditionalComponent: React.FC<Readonly<ConditionalComponentProps>> = ({ renderFruits }) => {
  // Example data for the Fruits component
  const fruitsList = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

  // Example props for the Hello component
  const helloMessage = "Hello from the ConditionalComponent!";
  const helloNumber = 123;

  return (
    <div>
      <h2>Conditional Rendering</h2>
      {/* Conditionally render either the Fruits component or the Hello component */}
      {renderFruits ? (
        <Fruits fruits={fruitsList} />
      ) : (
        <Hello message={helloMessage} number={helloNumber} />
      )}
    </div>
  );
};

export default ConditionalComponent;
```

**Explanation**:
- We defined a `ConditionalComponent` that accepts a boolean prop `renderFruits`.
- If `renderFruits` is `true`, the `Fruits` component is rendered with a list of fruits.
- If `renderFruits` is `false`, the `Hello` component is rendered with a custom message and number.

### 2. Updated `App.tsx` to Use the `ConditionalComponent`

We updated `App.tsx` to demonstrate the usage of `ConditionalComponent` by passing a flag to decide which component to render.

#### `src/App.tsx`

```tsx
import React from 'react';
import ConditionalComponent from './components/ConditionalComponent';

function App() {
  // Change this value to test conditional rendering
  const shouldRenderFruits = true;

  return (
    <div className="App">
      <h1>Welcome to the Conditional Rendering App</h1>
      {/* Render the ConditionalComponent with the flag for conditional rendering */}
      <ConditionalComponent renderFruits={shouldRenderFruits} />
    </div>
  );
}

export default App;
```

**Explanation**:
- We defined a boolean variable `shouldRenderFruits` to control which component is rendered.
- If `shouldRenderFruits` is `true`, the `Fruits` component is displayed. If `false`, the `Hello` component is displayed.


## Running the Application

To see the changes in action, start your development server:

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser. Depending on the value of `shouldRenderFruits`, you will either see a list of fruits or the message from the `Hello` component.

## Conclusion

Conditional rendering is a powerful feature in React that allows us to create dynamic and context-aware UIs. By implementing the `ConditionalComponent`, we demonstrated how to switch between different components based on a simple boolean prop. This approach helps simplify the code and improve maintainability while providing a responsive user experience.