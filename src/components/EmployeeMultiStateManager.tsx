import React, { useState } from 'react';

// Define the EmployeeMultiStateManager component
const EmployeeMultiStateManager: React.FC = () => {
  // State for employee name
  const [employeeName, setEmployeeName] = useState<string>('John Doe');

  // State for employee status
  const [employeeStatus, setEmployeeStatus] = useState<string>('Active');

  // State for employee department
  const [employeeDepartment, setEmployeeDepartment] = useState<string>('Human Resources');

  // Event handlers to update the states
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmployeeName(e.target.value);
  const handleStatusChange = (newStatus: string) => setEmployeeStatus(newStatus);
  const handleDepartmentChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmployeeDepartment(e.target.value);

  return (
    <div>
      <h2>Employee Multi-State Manager</h2>
      {/* Display the current states */}
      <p>
        <strong>Name:</strong> {employeeName}
      </p>
      <p>
        <strong>Status:</strong> {employeeStatus}
      </p>
      <p>
        <strong>Department:</strong> {employeeDepartment}
      </p>

      {/* Input field to update employee name */}
      <input
        type="text"
        value={employeeName}
        onChange={handleNameChange}
        placeholder="Enter employee name"
      />

      {/* Buttons to update employee status */}
      <div>
        <button onClick={() => handleStatusChange('Active')}>Set Active</button>
        <button onClick={() => handleStatusChange('On Leave')}>Set On Leave</button>
        <button onClick={() => handleStatusChange('Terminated')}>Set Terminated</button>
      </div>

      {/* Input field to update employee department */}
      <input
        type="text"
        value={employeeDepartment}
        onChange={handleDepartmentChange}
        placeholder="Enter department"
      />
    </div>
  );
};

export default EmployeeMultiStateManager;
