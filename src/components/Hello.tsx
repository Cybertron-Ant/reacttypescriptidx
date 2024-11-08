import React from 'react';

// Define the props interface for the dynamic component
interface HelloProps {
  greeting?: string;     // Optional greeting message
  name?: string;         // Optional user name
  number?: number;       // Optional number to display
  showEmoji?: boolean;   // Optional flag to show an emoji
  style?: React.CSSProperties; // Optional custom styles
}

// Define the Hello component using TypeScript with type annotations
const Hello: React.FC<HelloProps> = ({ greeting, name, number, showEmoji, style }) => {
  // Default values if no props are provided
  const defaultGreeting = "Hello from the Hello Component!";
  const defaultNumber = 42;

  // Construct the message dynamically based on the props
  const message = greeting || defaultGreeting;
  const displayName = name ? `, ${name}` : "";
  const displayNumber = number ?? defaultNumber;
  const emoji = showEmoji ? "👋" : "";

  return (
    <div style={style}>
      <h1>
        {emoji} {message}{displayName}
      </h1>
      <p>The number is: {displayNumber}</p>
    </div>
  );
};

export default Hello;
