import React from 'react';

// Define the props interface for TernaryComponent
interface TernaryComponentProps {
  readonly isLoggedIn: boolean; // Flag to determine if the user is logged in
  readonly userName?: string;   // Optional user name to display if logged in
}

// Define the TernaryComponent using TypeScript
const TernaryComponent: React.FC<Readonly<TernaryComponentProps>> = ({ isLoggedIn, userName }) => {
  return (
    <div>
      <h2>Ternary Operator Demo</h2>
      {/* Use a ternary operator to conditionally render content based on isLoggedIn */}
      {isLoggedIn ? (
        <p>Welcome back, {userName || 'User'}!</p>
      ) : (
        <p>Please log in to continue.</p>
      )}
    </div>
  );
};

export default TernaryComponent;
