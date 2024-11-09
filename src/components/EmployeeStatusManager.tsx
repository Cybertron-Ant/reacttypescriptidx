import React, { useState } from 'react';

// Define the structure for the employee
interface Employee {
  id: number;
  name: string;
  status: string; // Status of the employee (e.g., 'Active', 'On Leave', 'Terminated')
}

// Define the EmployeeStatusManager component
const EmployeeStatusManager: React.FC = () => {

  // State to manage the employee data
  const [employee, setEmployee] = useState<Employee>({
    id: 1,
    name: 'John Doe',
    status: 'Active',
  });

  // Event handler to update the employee status
  const updateStatus = (newStatus: string) => {
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      status: newStatus,
    }));
  };

  return (
    <div>
      <h2>Employee Status Manager</h2>
      <p>
        <strong>Name:</strong> {employee.name}
      </p>
      <p>
        <strong>Status:</strong> {employee.status}
      </p>
      {/* Buttons to update the employee status */}
      <button onClick={() => updateStatus('Active')}>Set Active</button>
      <button onClick={() => updateStatus('On Leave')}>Set On Leave</button>
      <button onClick={() => updateStatus('Terminated')}>Set Terminated</button>
    </div>
  );
};

export default EmployeeStatusManager;
