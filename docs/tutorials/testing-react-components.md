# Tutorial: Testing React Components with React Testing Library

This tutorial walks through the process of creating and testing React components using React Testing Library and Jest. We'll create a Counter component and write comprehensive tests for it.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Setting Up the Testing Environment](#setting-up-the-testing-environment)
- [Creating a Testable Component](#creating-a-testable-component)
- [Writing Tests](#writing-tests)
- [Running Tests](#running-tests)
- [Advanced Testing Techniques](#advanced-testing-techniques)

## Prerequisites

Ensure you have the following installed:
```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom jest
npm install --save-dev @babel/preset-react @babel/preset-typescript
```

## Setting Up the Testing Environment

1. Create Jest configuration (jest.config.cjs):
```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: 'tsconfig.test.json'
    }],
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
}
```

2. Set up TypeScript configuration (tsconfig.test.json):
```json
{
  "compilerOptions": {
    "jsx": "react",
    "esModuleInterop": true,
    "types": ["jest", "@testing-library/jest-dom"]
  }
}
```

3. Create test setup file (setupTests.ts):
```typescript
import '@testing-library/jest-dom';
```

## Creating a Testable Component

Let's create a Counter component with testable features:

```tsx
interface CounterProps {
  initialValue?: number;
  step?: number;
  label?: string;
}

export const Counter: React.FC<CounterProps> = ({
  initialValue = 0,
  step = 1,
  label = 'Counter'
}) => {
  const [count, setCount] = useState(initialValue);

  return (
    <div data-testid="counter-component">
      <h2>{label}</h2>
      <div data-testid="counter-display">{count}</div>
      <button
        onClick={() => setCount(prev => prev - step)}
        data-testid="decrement-button"
      >
        -
      </button>
      <button
        onClick={() => setCount(initialValue)}
        data-testid="reset-button"
      >
        Reset
      </button>
      <button
        onClick={() => setCount(prev => prev + step)}
        data-testid="increment-button"
      >
        +
      </button>
    </div>
  );
};
```

## Writing Tests

Here's how to write tests for different aspects of the component:

1. Testing Default Rendering:
```tsx
describe('Counter Component', () => {
  it('should render with default props', () => {
    render(<Counter />);
    
    expect(screen.getByText('Counter')).toBeInTheDocument();
    expect(screen.getByTestId('counter-display')).toHaveTextContent('0');
  });
});
```

2. Testing User Interactions:
```tsx
it('should increment count when clicked', () => {
  render(<Counter initialValue={0} step={2} />);
  
  const incrementButton = screen.getByTestId('increment-button');
  fireEvent.click(incrementButton);
  
  expect(screen.getByTestId('counter-display')).toHaveTextContent('2');
});
```

3. Testing Custom Props:
```tsx
it('should render with custom props', () => {
  render(<Counter initialValue={10} step={5} label="Custom Counter" />);
  
  expect(screen.getByText('Custom Counter')).toBeInTheDocument();
  expect(screen.getByTestId('counter-display')).toHaveTextContent('10');
});
```

## Running Tests

Run your tests using these commands:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

## Advanced Testing Techniques

### 1. Testing Multiple Interactions
```tsx
it('should handle multiple operations correctly', () => {
  render(<Counter initialValue={5} step={1} />);
  
  const incrementButton = screen.getByTestId('increment-button');
  const decrementButton = screen.getByTestId('decrement-button');
  
  fireEvent.click(incrementButton); // 6
  fireEvent.click(incrementButton); // 7
  fireEvent.click(decrementButton); // 6
  
  expect(screen.getByTestId('counter-display')).toHaveTextContent('6');
});
```

### 2. Testing Edge Cases
```tsx
it('should handle negative numbers', () => {
  render(<Counter initialValue={0} step={1} />);
  
  const decrementButton = screen.getByTestId('decrement-button');
  fireEvent.click(decrementButton);
  
  expect(screen.getByTestId('counter-display')).toHaveTextContent('-1');
});
```

### 3. Testing Accessibility
```tsx
it('should have accessible buttons', () => {
  render(<Counter />);
  
  expect(screen.getByRole('button', { name: /increment/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /decrement/i })).toBeInTheDocument();
});
```

## Best Practices

1. **Use Semantic Queries**
   - Prefer `getByRole`, `getByText` over `getByTestId`
   - Use `data-testid` only when necessary

2. **Test User Behavior**
   - Test what users see and do
   - Avoid testing implementation details

3. **Keep Tests Maintainable**
   - Use descriptive test names
   - Follow the Arrange-Act-Assert pattern
   - Group related tests using `describe` blocks

4. **Test Edge Cases**
   - Test boundary conditions
   - Test error states
   - Test with different prop combinations

## Common Testing Patterns

### 1. Setup/Teardown
```tsx
describe('Counter Component', () => {
  beforeEach(() => {
    // Setup code
  });

  afterEach(() => {
    // Cleanup code
  });
});
```

### 2. Custom Render Function
```tsx
const renderCounter = (props = {}) => {
  return render(<Counter {...props} />);
};
```

### 3. User Event Testing
```tsx
import userEvent from '@testing-library/user-event';

it('should handle user typing', async () => {
  const user = userEvent.setup();
  render(<Component />);
  
  await user.type(screen.getByRole('textbox'), 'Hello');
});
```

## Troubleshooting

Common issues and solutions:

1. **Jest can't find tests**
   - Check Jest configuration
   - Verify file naming conventions

2. **TypeScript errors**
   - Ensure proper tsconfig setup
   - Check @types packages are installed

3. **Test failures**
   - Use debug() to inspect DOM
   - Check for async operations
   - Verify component mounting

## Resources

- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Testing Library Queries](https://testing-library.com/docs/queries/about)
- [Common Testing Patterns](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

## Next Steps

- Explore snapshot testing
- Learn about mocking
- Practice TDD (Test-Driven Development)
- Implement CI/CD testing pipelines
