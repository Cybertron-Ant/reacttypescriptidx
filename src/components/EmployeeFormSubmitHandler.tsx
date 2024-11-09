import React, { useState } from 'react';

// Define the structure for the employee form data
interface EmployeeData {
  name: string;
  email: string;
  department: string;
  jobTitle: string;
}

// Define the EmployeeFormSubmitHandler component
const EmployeeFormSubmitHandler: React.FC = () => {
  // State to manage the form data
  const [formData, setFormData] = useState<EmployeeData>({
    name: '',
    email: '',
    department: '',
    jobTitle: '',
  });

  // State to manage form submission feedback
  const [formMessage, setFormMessage] = useState<string>('');

  // Event handler to update form data based on input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.name || !formData.email || !formData.department || !formData.jobTitle) {
      setFormMessage('Please fill in all fields.');
      return;
    }

    // Display the entered employee data
    alert(`Employee Details Submitted:\nName: ${formData.name}\nEmail: ${formData.email}\nDepartment: ${formData.department}\nJob Title: ${formData.jobTitle}`);

    // Reset form data and form message
    setFormData({
      name: '',
      email: '',
      department: '',
      jobTitle: '',
    });
    setFormMessage('Form submitted successfully!');
  };

  return (
    <div>
      <h2>Employee Form Submission Handler</h2>
      <form onSubmit={handleFormSubmit}>
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

        {/* Feedback message */}
        {formMessage && <p>{formMessage}</p>}
      </form>
    </div>
  );
};

export default EmployeeFormSubmitHandler;
