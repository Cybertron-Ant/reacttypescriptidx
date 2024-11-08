import React from 'react';

// Define props interface for the component
interface HelloProps {
  message?: string; // Optional prop for a custom message
  number?: number;  // Optional prop for a number value
}

// Define the Hello component using TypeScript with type annotations
const Hello: React.FC<HelloProps> = ({ message, number }) => {

  // Default message if no message prop is provided
  const defaultMessage = "Hello from the Hello Component!";
  
  // Default number if no number prop is provided
  const defaultNumber = 42;

  return (
    <div>
      <h1>{message || defaultMessage}</h1>
      <p>The number is: {number ?? defaultNumber}</p>
    </div>
  );
};

export default Hello;
