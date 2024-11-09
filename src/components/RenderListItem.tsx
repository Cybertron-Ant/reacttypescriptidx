import React from 'react';

// Define the list item structure
interface ListItem {
  id: number;
  name: string;
  isAvailable: boolean; // Determines if the item is available
}

// Define the props interface for RenderListItem
interface RenderListItemProps {
  readonly items: ListItem[]; // Array of list items to render
}

// Define the RenderListItem component using TypeScript
const RenderListItem: React.FC<Readonly<RenderListItemProps>> = ({ items }) => {
  return (
    <div>
      <h2>Conditional List Item Rendering</h2>
      <ul>
        {/* Iterate over the items array and conditionally render list items */}
        {items.map((item) =>
          item.isAvailable ? (
            <li key={item.id}>
              {item.name} - <span style={{ color: 'green' }}>Available</span>
            </li>
          ) : (
            <li key={item.id} style={{ color: 'red' }}>
              {item.name} - Unavailable
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default RenderListItem;
