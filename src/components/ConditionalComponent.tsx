import React from 'react';
import Fruits from './Fruits';
import Hello from './Hello';

// Define the props interface for ConditionalComponent
interface ConditionalComponentProps {
  readonly renderFruits: boolean; // Flag to decide which component to render
}

// Define the ConditionalComponent using TypeScript
const ConditionalComponent: React.FC<Readonly<ConditionalComponentProps>> = ({ renderFruits }) => {
  // Example data for the Fruits component
  const fruitsList = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

  // Example props for the Hello component
  const helloMessage = "Hello from the ConditionalComponent!";
  const helloNumber = 123;

  return (
    <div>
      <h2>Conditional Rendering</h2>
      {/* Conditionally render either the Fruits component or the Hello component */}
      {renderFruits ? (
        <Fruits fruits={fruitsList} />
      ) : (
        <Hello greeting={helloMessage} number={helloNumber} />
      )}
    </div>
  );
};

export default ConditionalComponent;
