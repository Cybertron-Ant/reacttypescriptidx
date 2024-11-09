# ActiveEmployees Component

## Description

The `ActiveEmployees` component displays a list of employees, highlighting those who are currently active.  Inactive employees are not displayed.

## Props

| Prop Name      | Type                               | Description                                      | Required |
|-----------------|------------------------------------|--------------------------------------------------|----------|
| `employees`    | `Employee[]`                         | An array of employee objects.                     | Yes      |


## Employee Object Structure

```typescript
interface Employee {
  id: number;
  name: string;
  isActive: boolean;
}
```

## Example Usage

```jsx
import ActiveEmployees from './ActiveEmployees';

const employees = [
  { id: 1, name: 'John Doe', isActive: true },
  { id: 2, name: 'Jane Smith', isActive: false },
  { id: 3, name: 'Peter Jones', isActive: true },
];

<ActiveEmployees employees={employees} />
```

This will render a list showing only John Doe and Peter Jones as active employees.
