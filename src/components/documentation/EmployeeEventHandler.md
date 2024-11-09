# EmployeeEventHandler Component

This component displays a list of employees and allows toggling their leave status.

## Props

| Prop Name       | Type                               | Description                                                                 |
|-----------------|------------------------------------|-----------------------------------------------------------------------------|
| `employees`     | `Employee[]`                         | An array of employee objects. Each object must have an `id`, `name`, and `isOnLeave` property. |

### Employee Interface

```typescript
interface Employee {
  id: number;
  name: string;
  isOnLeave: boolean;
}
```

## Functionality

The component renders a list of employees. Each employee's name is displayed along with their current leave status ("On Leave" or "Available"). Clicking on an employee's name toggles their leave status.  The employee's name will change color to reflect their leave status (red for "On Leave", green for "Available").

## Usage Example

```jsx
import EmployeeEventHandler from './EmployeeEventHandler';

const employees = [
  { id: 1, name: 'John Doe', isOnLeave: false },
  { id: 2, name: 'Jane Smith', isOnLeave: true },
  { id: 3, name: 'Peter Jones', isOnLeave: false },
];

<EmployeeEventHandler employees={employees} />
