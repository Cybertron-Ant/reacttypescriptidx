# EmployeeInputHandler Component Documentation

This component provides a simple form for inputting employee information.  It uses controlled inputs to manage the state of the form fields.

## Functionality

The `EmployeeInputHandler` component renders a form with three input fields:

* **Name:** A text input field for the employee's name.
* **Email:** An email input field for the employee's email address.
* **Job Title:** A text input field for the employee's job title.

Upon submission, the component displays an alert box containing the entered employee information.  The input fields are then reset.

## Props

This component does not accept any props.

## State

The component manages the following state variables:

* `employeeName`: Stores the employee's name (string).
* `employeeEmail`: Stores the employee's email address (string).
* `employeeJobTitle`: Stores the employee's job title (string).

## Usage

```jsx
import EmployeeInputHandler from './EmployeeInputHandler';

function MyComponent() {
  return (
    <div>
      <EmployeeInputHandler />
    </div>
  );
}
```

## Example

![Employee Input Fields](../assets/employee_input_fields.PNG)


## Code Example

```typescript
import React, { useState } from 'react';

const EmployeeInputHandler: React.FC = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [employeeEmail, setEmployeeEmail] = useState('');
  const [employeeJobTitle, setEmployeeJobTitle] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmployeeName(e.target.value);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmployeeEmail(e.target.value);
  const handleJobTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmployeeJobTitle(e.target.value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Employee Info:\nName: ${employeeName}\nEmail: ${employeeEmail}\nJob Title: ${employeeJobTitle}`);
    setEmployeeName('');
    setEmployeeEmail('');
    setEmployeeJobTitle('');
  };

  return (
    <div>
      <h2>Employee Input Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" value={employeeName} onChange={handleNameChange} placeholder="Enter employee name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" value={employeeEmail} onChange={handleEmailChange} placeholder="Enter employee email" />
        </div>
        <div>
          <label htmlFor="jobTitle">Job Title:</label>
          <input id="jobTitle" type="text" value={employeeJobTitle} onChange={handleJobTitleChange} placeholder="Enter employee job title" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeInputHandler;
