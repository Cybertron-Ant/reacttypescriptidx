
# Vite + React + TypeScript: Conditional HTML Element Rendering Tutorial

## Introduction

In this tutorial, we added a new component named `ConditionalElementVariable.tsx` to demonstrate how to conditionally render different HTML elements based on a prop. This component allows us to dynamically render `<h1>`, `<h2>`, `<h3>`, or `<p>` elements depending on the specified input.

### Importance in Real-World Applications

Conditionally rendering HTML elements is a common requirement in modern web applications. It provides several key benefits:

1. **Dynamic Content Presentation**: Applications often need to render different HTML elements based on user input, state, or data, allowing for a more dynamic and responsive UI.
2. **Reusability**: Instead of creating multiple components or duplicating code for different HTML elements, we can use a single component with conditional rendering logic, making the codebase more maintainable.
3. **Simplified Logic**: Using a variable to control which HTML element is rendered centralizes the decision-making process, reducing complexity and making the code easier to read and modify.

## Changes Made

### 1. Created `ConditionalElementVariable.tsx` for Conditional HTML Element Rendering

The `ConditionalElementVariable.tsx` component conditionally renders different HTML elements (`h1`, `h2`, `h3`, or `p`) based on the `elementType` prop.

#### `src/components/ConditionalElementVariable.tsx`

```tsx
import React from 'react';

// Define the props interface for ConditionalElementVariable
interface ConditionalElementVariableProps {
  readonly elementType: 'h1' | 'h2' | 'h3' | 'p'; // Type of HTML element to render
  readonly text: string; // The text content to display
}

// Define the ConditionalElementVariable component using TypeScript
const ConditionalElementVariable: React.FC<Readonly<ConditionalElementVariableProps>> = ({ elementType, text }) => {
  // Define the element to render based on the elementType prop
  let elementToRender;

  switch (elementType) {
    case 'h1':
      elementToRender = <h1>{text}</h1>;
      break;
    case 'h2':
      elementToRender = <h2>{text}</h2>;
      break;
    case 'h3':
      elementToRender = <h3>{text}</h3>;
      break;
    case 'p':
      elementToRender = <p>{text}</p>;
      break;
    default:
      elementToRender = <p>Invalid element type specified.</p>;
  }

  return (
    <div>
      <h2>Conditional HTML Element Rendering</h2>
      {/* Render the chosen HTML element */}
      {elementToRender}
    </div>
  );
};

export default ConditionalElementVariable;
```

**Explanation**:
- The `ConditionalElementVariable` component accepts two props: `elementType` (the type of HTML element to render) and `text` (the content to display).
- We use a `switch` statement to decide which HTML element to render based on the `elementType` prop.
- If an invalid `elementType` is provided, an error message is displayed.

### 2. Updated `App.tsx` to Use the `ConditionalElementVariable`

We updated `App.tsx` to demonstrate the usage of `ConditionalElementVariable` by passing different element types and text.

#### `src/App.tsx`

```tsx
import React from 'react';
import ConditionalElementVariable from './components/ConditionalElementVariable';

function App() {
  // Change these values to test different HTML elements
  const htmlElementType = 'h1'; // Options: 'h1', 'h2', 'h3', 'p'
  const displayText = 'This is a conditionally rendered HTML element!';

  return (
    <div className="App">
      <h1>Welcome to the Conditional HTML Element App</h1>
      {/* Render the ConditionalElementVariable with the specified element type and text */}
      <ConditionalElementVariable elementType={htmlElementType} text={displayText} />
    </div>
  );
}

export default App;
```

**Explanation**:
- We define two variables in `App.tsx`: `htmlElementType` (specifying the HTML element type) and `displayText` (the content to display).
- The `ConditionalElementVariable` component uses these variables to render the appropriate HTML element.

## Git Commit

Here is the suggested Git commit message for the changes made so far:

```
feat: add ConditionalElementVariable component for dynamic HTML element rendering

- Created ConditionalElementVariable.tsx to conditionally render different HTML elements (h1, h2, h3, p).
- Used a switch statement to determine which HTML element to render based on the elementType prop.
- Added immutability to props using TypeScript's Readonly utility.
- Updated App.tsx to demonstrate usage of the ConditionalElementVariable component with example element types and text.
- Improved code flexibility and dynamic content rendering with conditional HTML elements.
```

## Running the Application

To see the changes in action, start your development server:

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser. Depending on the value of `htmlElementType`, you will see different HTML elements (`h1`, `h2`, `h3`, or `p`) rendered with the specified text.

## Conclusion

Conditionally rendering HTML elements based on a variable is a powerful technique in React applications, allowing for flexible and dynamic UI updates. The `ConditionalElementVariable` component demonstrates how to centralize rendering logic, making the codebase easier to maintain and scale.

Happy coding!
