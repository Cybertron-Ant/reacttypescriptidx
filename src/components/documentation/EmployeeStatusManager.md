# EmployeeStatusManager Component Documentation

## Description

The `EmployeeStatusManager` component is a simple React component that allows you to manage the status of an employee.  It displays the employee's name and current status, and provides buttons to update the status to 'Active', 'On Leave', or 'Terminated'.

## Interface: `Employee`

```typescript
interface Employee {
  id: number;
  name: string;
  status: string; // Status of the employee (e.g., 'Active', 'On Leave', 'Terminated')
}
```

This interface defines the structure of the employee data used by the component.

## Usage

The component takes no props.  It maintains its own internal state to track the employee's status.  The status can be updated by clicking the provided buttons.

## Example

```jsx
<EmployeeStatusManager />
```

This will render a display showing the employee's name and status, along with buttons to change the status.

## Screenshot

![Employee Management Dashboard](../assets/employee_management_dashboard.PNG)
