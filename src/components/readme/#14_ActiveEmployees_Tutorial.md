
# Vite + React + TypeScript: Conditional Rendering of Active Employees in an HRM App

## Introduction

In this tutorial, we created a new component named `ActiveEmployees.tsx` to demonstrate how to use ternary operators for conditional rendering in a Human Resource Management (HRM) application. The component displays a list of employees but only shows those who are currently active, hiding the ones who are inactive or on leave.

### Importance in Real-World HRM Applications

Conditionally rendering employee data is crucial in HRM applications for several reasons:

1. **Efficient Workforce Management**: By showing only active employees, managers and HR staff can quickly identify who is currently available for tasks or assignments, streamlining decision-making.
2. **Dynamic and Real-Time Data**: The status of employees can change frequently (e.g., due to leave or availability updates). This component allows the UI to reflect the current state dynamically, ensuring that the information presented is always up-to-date.
3. **Enhanced User Experience**: Displaying only relevant information (i.e., active employees) keeps the dashboard uncluttered and user-friendly, allowing HR staff to focus on actionable data.
4. **Cleaner Code with Ternary Operators**: Using ternary operators for conditional rendering simplifies the code and avoids the need for complex `if-else` statements, making the component more maintainable.

## Changes Made

### 1. Created `ActiveEmployees.tsx` for Conditional Employee Rendering

The `ActiveEmployees.tsx` component conditionally renders a list of employees based on their availability status.

#### `src/components/ActiveEmployees.tsx`

```tsx
import React from 'react';

// Define the structure for each employee item
interface Employee {
  id: number;
  name: string;
  isActive: boolean; // Determines if the employee is active
}

// Define the props interface for ActiveEmployees
interface ActiveEmployeesProps {
  readonly employees: Employee[]; // Array of employee items to render
}

// Define the ActiveEmployees component using TypeScript
const ActiveEmployees: React.FC<Readonly<ActiveEmployeesProps>> = ({ employees }) => {
  return (
    <div>
      <h2>Active Employees</h2>
      <ul>
        {/* Use a ternary operator to render only active employees */}
        {employees.map((employee) =>
          employee.isActive ? (
            <li key={employee.id} style={{ color: 'green' }}>
              {employee.name} - Active
            </li>
          ) : null // Hide the employee if they are inactive
        )}
      </ul>
    </div>
  );
};

export default ActiveEmployees;
```

**Explanation**:
- The `ActiveEmployees` component accepts a prop `employees`, which is an array of employee objects.
- Each employee object has an `id`, `name`, and `isActive` flag.
- We use a ternary operator to conditionally render each employee based on their `isActive` status:
  - If `isActive` is `true`, the employee is displayed with a green "Active" label.
  - If `isActive` is `false`, the employee is not rendered (`null`), effectively hiding them.

### 2. Updated `App.tsx` to Use the `ActiveEmployees` Component

We updated `App.tsx` to demonstrate the usage of `ActiveEmployees` with an example array of employee items.

#### `src/App.tsx`

```tsx
import React from 'react';
import ActiveEmployees from './components/ActiveEmployees';

function App() {
  // Example array of employee items
  const employeeList = [
    { id: 1, name: 'Alice Johnson', isActive: true },
    { id: 2, name: 'Bob Smith', isActive: false },
    { id: 3, name: 'Charlie Brown', isActive: true },
    { id: 4, name: 'Diana Prince', isActive: false },
    { id: 5, name: 'Ethan Hunt', isActive: true },
  ];

  return (
    <div className="App">
      <h1>Human Resource Management Dashboard</h1>
      {/* Render the ActiveEmployees component with the array of employees */}
      <ActiveEmployees employees={employeeList} />
    </div>
  );
}

export default App;
```

**Explanation**:
- We define an array of employee items (`employeeList`) with `id`, `name`, and `isActive` properties.
- The `ActiveEmployees` component uses this array to conditionally render only the employees who are currently active, hiding those who are inactive.

## Running the Application

To see the changes in action, start your development server:

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser. You should see a list of active employees, with inactive ones hidden from the view.

## Conclusion

Conditionally rendering employee data based on their status is a key feature in HRM applications. The `ActiveEmployees` component demonstrates how to use ternary operators to create a responsive and dynamic UI that reflects real-time data. This approach improves code maintainability, enhances user experience, and streamlines HR processes.