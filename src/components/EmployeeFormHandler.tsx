import React, { useState } from 'react';

// Define the structure for the employee form data
interface EmployeeForm {
  name: string;
  email: string;
  department: string;
  jobTitle: string;
}

// Define the EmployeeFormHandler component
const EmployeeFormHandler: React.FC = () => {
  // State to manage the form data
  const [formData, setFormData] = useState<EmployeeForm>({
    name: '',
    email: '',
    department: '',
    jobTitle: '',
  });

  // Event handler to update the form data based on input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Employee Details:\nName: ${formData.name}\nEmail: ${formData.email}\nDepartment: ${formData.department}\nJob Title: ${formData.jobTitle}`);
    // Reset the form data after submission
    setFormData({
      name: '',
      email: '',
      department: '',
      jobTitle: '',
    });
  };

  return (
    <div>
      <h2>Employee Form Handler</h2>
      <form onSubmit={handleSubmit}>
        {/* Input field for employee name */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter employee name"
          />
        </div>

        {/* Input field for employee email */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter employee email"
          />
        </div>

        {/* Input field for employee department */}
        <div>
          <label htmlFor="department">Department:</label>
          <input
            id="department"
            name="department"
            type="text"
            value={formData.department}
            onChange={handleInputChange}
            placeholder="Enter department"
          />
        </div>

        {/* Input field for employee job title */}
        <div>
          <label htmlFor="jobTitle">Job Title:</label>
          <input
            id="jobTitle"
            name="jobTitle"
            type="text"
            value={formData.jobTitle}
            onChange={handleInputChange}
            placeholder="Enter job title"
          />
        </div>

        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeFormHandler;
