
# Vite + React + TypeScript: Event Handling in HRM App with EmployeeEventHandler Tutorial

## Introduction

In this tutorial, we created a new component named `EmployeeEventHandler.tsx` to demonstrate event handling in a Human Resource Management (HRM) application. The component allows users to click on an employee’s name to toggle their status between "Available" and "On Leave," showcasing how to use React’s event handling capabilities effectively.

### Importance in Real-World HRM Applications

Event handling is a core feature in interactive web applications, especially in HRM systems where user actions need to update the state of the application in real-time. Key benefits include:

1. **Interactive Employee Management**: HR staff can quickly update the status of employees directly from the dashboard, streamlining administrative tasks and improving efficiency.
2. **Real-Time Updates**: Event handling enables real-time status updates, ensuring that the displayed data is always current and accurate.
3. **Enhanced User Experience**: Allowing users to interact with the employee list by clicking on names makes the interface more engaging and responsive.
4. **Simplified Code**: Using event handlers in React helps manage user interactions cleanly, making the code easier to read and maintain.

## Changes Made

### 1. Created `EmployeeEventHandler.tsx` for Employee Status Toggling

The `EmployeeEventHandler.tsx` component demonstrates event handling by allowing users to click on an employee’s name to toggle their leave status.

#### `src/components/EmployeeEventHandler.tsx`

```tsx
import React, { useState } from 'react';

// Define the structure for each employee item
interface Employee {
  id: number;
  name: string;
  isOnLeave: boolean; // Determines if the employee is on leave
}

// Define the props interface for EmployeeEventHandler
interface EmployeeEventHandlerProps {
  readonly employees: Employee[]; // Array of employee items to render
}

// Define the EmployeeEventHandler component using TypeScript
const EmployeeEventHandler: React.FC<Readonly<EmployeeEventHandlerProps>> = ({ employees }) => {
  // State to manage the list of employees
  const [employeeList, setEmployeeList] = useState(employees);

  // Event handler to toggle the leave status of an employee
  const handleToggleLeaveStatus = (id: number) => {
    // Update the leave status of the selected employee
    const updatedEmployees = employeeList.map((employee) =>
      employee.id === id ? { ...employee, isOnLeave: !employee.isOnLeave } : employee
    );
    setEmployeeList(updatedEmployees);
  };

  return (
    <div>
      <h2>Employee Status Toggle</h2>
      <ul>
        {/* Render the list of employees with click event handling */}
        {employeeList.map((employee) => (
          <li
            key={employee.id}
            style={{ cursor: 'pointer', color: employee.isOnLeave ? 'red' : 'green' }}
            onClick={() => handleToggleLeaveStatus(employee.id)}
          >
            {employee.name} - {employee.isOnLeave ? 'On Leave' : 'Available'}
          </li>
        ))}
      </ul>
      <p>Click on an employee's name to toggle their leave status.</p>
    </div>
  );
};

export default EmployeeEventHandler;
```

**Explanation**:
- We use the `useState` hook to manage the list of employees and their statuses.
- The `handleToggleLeaveStatus` function toggles the `isOnLeave` status of an employee when their name is clicked.
- The employee’s name is styled in red if they are on leave and green if they are available.

### 2. Updated `App.tsx` to Use the `EmployeeEventHandler`

We updated `App.tsx` to demonstrate the usage of `EmployeeEventHandler` with an example list of employees.

#### `src/App.tsx`

```tsx
import React from 'react';
import EmployeeEventHandler from './components/EmployeeEventHandler';

function App() {
  // Example array of employee items
  const employeeList = [
    { id: 1, name: 'Alice Johnson', isOnLeave: false },
    { id: 2, name: 'Bob Smith', isOnLeave: true },
    { id: 3, name: 'Charlie Brown', isOnLeave: false },
    { id: 4, name: 'Diana Prince', isOnLeave: true },
    { id: 5, name: 'Ethan Hunt', isOnLeave: false },
  ];

  return (
    <div className="App">
      <h1>Human Resource Management Dashboard</h1>
      {/* Render the EmployeeEventHandler component with the array of employees */}
      <EmployeeEventHandler employees={employeeList} />
    </div>
  );
}

export default App;
```

**Explanation**:
- We define an array of employee items (`employeeList`) with `id`, `name`, and `isOnLeave` properties.
- The `EmployeeEventHandler` component uses this array to display the list of employees and handle click events to toggle their leave status.

## Running the Application

To see the changes in action, start your development server:

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser. Click on an employee’s name to toggle their status between "On Leave" and "Available."

## Conclusion

Event handling is a fundamental concept in React applications, especially in HRM systems where user interactions are essential for managing employee data. The `EmployeeEventHandler` component demonstrates how to use event handlers effectively, enhancing the user experience and making the application more interactive and dynamic.

Happy coding!
