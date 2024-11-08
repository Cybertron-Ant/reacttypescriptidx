import React from 'react';

// Define the props interface for the Fruits component
interface FruitsProps {
  readonly fruits: string[]; // Array of fruit names (immutable)
}

// Define the Fruits component using TypeScript
const Fruits: React.FC<Readonly<FruitsProps>> = ({ fruits }) => {
  return (
    <div>
      <h2>Fruits List</h2>
      {/* Render the list of fruits */}
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fruits;
