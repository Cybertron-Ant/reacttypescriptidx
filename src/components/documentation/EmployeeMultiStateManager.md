# EmployeeMultiStateManager Component Documentation

This component demonstrates managing multiple states within a single React component.  It allows for updating employee name, status, and department independently.

## Functionality

The `EmployeeMultiStateManager` component uses the `useState` hook to manage three separate pieces of state:

* **employeeName:**  A string representing the employee's name.  This can be updated via an input field.
* **employeeStatus:** A string representing the employee's status (Active, On Leave, Terminated). This can be updated via buttons.
* **employeeDepartment:** A string representing the employee's department. This can be updated via an input field.

The component provides input fields and buttons to modify each state.  Changes are reflected immediately in the displayed information.

## Usage

```jsx
import EmployeeMultiStateManager from './EmployeeMultiStateManager';

function App() {
  return (
    <div className="App">
      <EmployeeMultiStateManager />
    </div>
  );
}

export default App;
```

## State Management

The component uses React's `useState` hook for managing each state variable.  Each state update triggers a re-render of the component, updating the displayed information.

## Example

![Employee Multi-State Manager](../assets/employee_multiple_states.PNG)


## Code Example

```typescript
import React, { useState } from 'react';

const EmployeeMultiStateManager: React.FC = () => {
  const [employeeName, setEmployeeName] = useState<string>('John Doe');
  const [employeeStatus, setEmployeeStatus] = useState<string>('Active');
  const [employeeDepartment, setEmployeeDepartment] = useState<string>('Human Resources');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmployeeName(e.target.value);
  const handleStatusChange = (newStatus: string) => setEmployeeStatus(newStatus);
  const handleDepartmentChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmployeeDepartment(e.target.value);

  return (
    <div>
      <h2>Employee Multi-State Manager</h2>
      <p><strong>Name:</strong> {employeeName}</p>
      <p><strong>Status:</strong> {employeeStatus}</p>
      <p><strong>Department:</strong> {employeeDepartment}</p>
      <input type="text" value={employeeName} onChange={handleNameChange} placeholder="Enter employee name" />
      <div>
        <button onClick={() => handleStatusChange('Active')}>Set Active</button>
        <button onClick={() => handleStatusChange('On Leave')}>Set On Leave</button>
        <button onClick={() => handleStatusChange('Terminated')}>Set Terminated</button>
      </div>
      <input type="text" value={employeeDepartment} onChange={handleDepartmentChange} placeholder="Enter department" />
    </div>
  );
};

export default EmployeeMultiStateManager;
