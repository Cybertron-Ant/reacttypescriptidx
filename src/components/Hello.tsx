import React from 'react';

// Define the user object interface
interface UserDetails {
  name: string;
  age: number;
}

// Define the props interface for the component
interface HelloProps {
  readonly greeting?: string;           // Optional greeting message
  readonly number?: number;             // Optional number to display
  readonly showEmoji?: boolean;         // Optional flag to show an emoji
  readonly style?: React.CSSProperties; // Optional custom styles
  readonly greetingsArray?: string[];   // Optional array of greetings
  readonly user?: UserDetails;          // Optional user details object
}

// Define the Hello component using TypeScript with type annotations
const Hello: React.FC<Readonly<HelloProps>> = ({
  greeting,
  number,
  showEmoji,
  style,
  greetingsArray,
  user,
}) => {
  // Default values if no props are provided
  const defaultGreeting = "Hello from the Hello Component!";
  const defaultNumber = 42;

  // Construct the message dynamically based on the props
  const message = greeting || defaultGreeting;
  const displayNumber = number ?? defaultNumber;
  const emoji = showEmoji ? "👋" : "";

  return (
    <div style={style}>
      <h1>
        {emoji} {message}
      </h1>
      <p>The number is: {displayNumber}</p>

      {/* Display the greetings array if provided */}
      {greetingsArray && (
        <ul>
          {greetingsArray.map((greet, index) => (
            <li key={index}>{greet}</li>
          ))}
        </ul>
      )}

      {/* Display user details if the user object is provided */}
      {user && (
        <p>
          User: {user.name}, Age: {user.age}
        </p>
      )}
    </div>
  );
};

export default Hello;
