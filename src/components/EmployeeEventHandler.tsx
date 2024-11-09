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
