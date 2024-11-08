import React from 'react';

// Define the object structure interface
interface Item {
  id: number;
  name: string;
  description: string;
}

// Define the props interface for the component
interface RenderObjectsProps {
  readonly items: Item[]; // Array of objects (immutable)
}

// Define the RenderObjects component using TypeScript
const RenderObjects: React.FC<Readonly<RenderObjectsProps>> = ({ items }) => {
  return (
    <div>
      <h2>Items List</h2>
      {/* Render the list of objects */}
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong>: {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RenderObjects;
