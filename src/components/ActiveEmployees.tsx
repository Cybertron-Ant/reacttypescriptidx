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
