# Counter Component

A flexible and reusable counter component built with React and TypeScript, featuring increment, decrement, and reset functionality.

## Features

- TypeScript support with proper type definitions
- Customizable initial value and step size
- Custom labeling support
- Fully tested with React Testing Library
- Accessible UI elements with ARIA labels

## Installation

The component is part of the main project. No additional installation is needed.

## Usage

```tsx
import { Counter } from './Counter';

// Basic usage with default props
<Counter />

// Custom initial value and step
<Counter initialValue={10} step={5} />

// Custom label
<Counter label="Score Counter" initialValue={0} step={1} />
```

## Props

| Prop         | Type   | Default   | Description                           |
|--------------|--------|-----------|---------------------------------------|
| initialValue | number | 0         | Starting value for the counter        |
| step         | number | 1         | Amount to increment/decrement by      |
| label        | string | "Counter" | Label text displayed above the counter|

## Examples

### Basic Counter
```tsx
<Counter />
```
Creates a counter starting at 0, incrementing/decrementing by 1.

### Custom Step Counter
```tsx
<Counter 
  initialValue={100}
  step={10}
  label="Points"
/>
```
Creates a counter starting at 100, incrementing/decrementing by 10, labeled "Points".

## Testing

The component comes with comprehensive tests covering:
- Default rendering
- Custom props
- User interactions
- Edge cases

Run the tests using:
```bash
npm test
```

## Accessibility

The component is built with accessibility in mind:
- All buttons have appropriate ARIA labels
- Interactive elements are keyboard accessible
- Clear visual hierarchy with semantic HTML

## Contributing

When modifying this component:
1. Ensure all tests pass
2. Add tests for new functionality
3. Update documentation for any changes
4. Maintain TypeScript type safety
