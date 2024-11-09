# TernaryComponent

## Description

This component demonstrates the use of a ternary operator in React to conditionally render content based on a boolean prop (`isLoggedIn`).

## Props

| Prop Name     | Type        | Description                                      | Required | Default |
|---------------|-------------|--------------------------------------------------|----------|---------|
| `isLoggedIn` | `boolean`   | Flag indicating whether the user is logged in.    | Yes      |         |
| `userName`   | `string?`   | User's name (optional, displayed if logged in). | No       | `User`  |

## Usage

```jsx
import TernaryComponent from './TernaryComponent';

const App = () => {
  const isLoggedIn = true;
  const userName = 'John Doe';

  return (
    <div>
      <TernaryComponent isLoggedIn={isLoggedIn} userName={userName} />
    </div>
  );
};

export default App;
```

## Example

If `isLoggedIn` is `true` and `userName` is 'John Doe', the component renders:

```
Welcome back, John Doe!
```

If `isLoggedIn` is `false`, the component renders:

```
Please log in to continue.
```

## Code

```typescript
import React from 'react';

interface TernaryComponentProps {
  readonly isLoggedIn: boolean;
  readonly userName?: string;
}

const TernaryComponent: React.FC<Readonly<TernaryComponentProps>> = ({ isLoggedIn, userName }) => {
  return (
    <div>
      <h2>Ternary Operator Demo</h2>
      {isLoggedIn ? (
        <p>Welcome back, {userName || 'User'}!</p>
      ) : (
        <p>Please log in to continue.</p>
      )}
    </div>
  );
};

export default TernaryComponent;
