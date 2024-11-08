import React from 'react';

// Define the props interface for the LoopComponent
interface LoopComponentProps {
  readonly count: number; // Number of times to render the child component
  readonly message: string; // Message to display inside each child component
}

// Define a simple ChildComponent to be rendered in a loop
const ChildComponent: React.FC<{ message: string }> = ({ message }) => {
  return <div className="child-item">{message}</div>;
};

// Define the LoopComponent using TypeScript
const LoopComponent: React.FC<Readonly<LoopComponentProps>> = ({ count, message }) => {
  // Create an array of elements by looping 'count' times
  const elements = Array.from({ length: count }, (_, index) => (
    <ChildComponent key={index} message={`${message} #${index + 1}`} />
  ));

  return (
    <div>
      <h2>Looped Components</h2>
      {/* Render the array of ChildComponent elements */}
      <div className="loop-container">{elements}</div>
    </div>
  );
};

export default LoopComponent;
