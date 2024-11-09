import React, { useState } from 'react';

// Define the EmployeeInputHandler component
const EmployeeInputHandler: React.FC = () => {
  // State variables for input fields
  const [employeeName, setEmployeeName] = useState<string>('');
  const [employeeEmail, setEmployeeEmail] = useState<string>('');
  const [employeeJobTitle, setEmployeeJobTitle] = useState<string>('');

  // Event handlers for input changes
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmployeeName(e.target.value);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmployeeEmail(e.target.value);
  const handleJobTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmployeeJobTitle(e.target.value);

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Employee Info:\nName: ${employeeName}\nEmail: ${employeeEmail}\nJob Title: ${employeeJobTitle}`);
    // Reset input fields after submission
    setEmployeeName('');
    setEmployeeEmail('');
    setEmployeeJobTitle('');
  };

  return (
    <div>
      <h2>Employee Input Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Input field for employee name */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={employeeName}
            onChange={handleNameChange}
            placeholder="Enter employee name"
          />
        </div>

        {/* Input field for employee email */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={employeeEmail}
            onChange={handleEmailChange}
            placeholder="Enter employee email"
          />
        </div>

        {/* Input field for employee job title */}
        <div>
          <label htmlFor="jobTitle">Job Title:</label>
          <input
            id="jobTitle"
            type="text"
            value={employeeJobTitle}
            onChange={handleJobTitleChange}
            placeholder="Enter employee job title"
          />
        </div>

        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeInputHandler;
