# EmployeeFormSubmitHandler Component Documentation

This component handles the submission of an employee form. It uses React's functional component style and manages form data and submission feedback using the `useState` hook.

## Functionality

The component provides the following features:

* **Form Data Management:**  Uses state to track employee name, email, department, and job title.  Changes to input fields update the state using `handleInputChange`.
* **Form Submission:** The `handleFormSubmit` function handles form submission. It performs basic validation to ensure all fields are filled.  If validation passes, it displays an alert with the submitted data.  Otherwise, it displays an error message.
* **Form Validation:**  Basic validation checks if all fields are filled before submission.
* **Feedback Mechanism:**  Provides feedback to the user through a message indicating successful submission or validation errors.
* **Form Reset:** After successful submission, the form is reset to its initial state.

## Code Structure

The component is structured as follows:

1. **Interface Definition:** Defines the `EmployeeData` interface to structure the employee form data.
2. **State Variables:** Uses `useState` to manage form data (`formData`) and feedback messages (`formMessage`).
3. **Event Handlers:** `handleInputChange` updates the form data state based on user input. `handleFormSubmit` handles form submission, validation, and feedback.
4. **JSX Rendering:**  Renders a form with input fields for each employee data field, a submit button, and a display area for feedback messages.

## Usage

The component can be used as follows:

```jsx
import EmployeeFormSubmitHandler from './EmployeeFormSubmitHandler';

function MyComponent() {
  return (
    <div>
      <EmployeeFormSubmitHandler />
    </div>
  );
}
```

## Example Screenshot

![Employee Form Screenshot](handle_form_submit.PNG)


## Props

This component does not accept any props.

## State

* **formData (EmployeeData):**  Holds the current values of the form fields.
* **formMessage (string):** Displays feedback messages to the user (success or error).

## Methods

* **handleInputChange(e: React.ChangeEvent<HTMLInputElement>):** Updates the `formData` state when input fields change.
* **handleFormSubmit(e: React.FormEvent):** Handles form submission, validation, and feedback.
