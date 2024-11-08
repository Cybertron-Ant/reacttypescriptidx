import React from 'react';

// Define the props interface using Readonly for immutability
interface HelloProps {
  readonly greeting?: string;     // Immutable greeting message
  readonly name?: string;         // Immutable user name
  readonly number?: number;       // Immutable number to display
  readonly showEmoji?: boolean;   // Immutable flag to show an emoji
  readonly style?: React.CSSProperties; // Immutable custom styles
}

// Define the Hello component using TypeScript with immutable props
const Hello: React.FC<Readonly<HelloProps>> = ({ greeting, name, number, showEmoji, style }) => {
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
