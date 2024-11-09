import React from 'react';

// Define the props interface for ConditionalElementVariable
interface ConditionalElementVariableProps {
  readonly elementType: 'h1' | 'h2' | 'h3' | 'p'; // Type of HTML element to render
  readonly text: string; // The text content to display
}

// Define the ConditionalElementVariable component using TypeScript
const ConditionalElementVariable: React.FC<Readonly<ConditionalElementVariableProps>> = ({ elementType, text }) => {
  // Define the element to render based on the elementType prop
  let elementToRender;

  switch (elementType) {
    case 'h1':
      elementToRender = <h1>{text}</h1>;
      break;
    case 'h2':
      elementToRender = <h2>{text}</h2>;
      break;
    case 'h3':
      elementToRender = <h3>{text}</h3>;
      break;
    case 'p':
      elementToRender = <p>{text}</p>;
      break;
    default:
      elementToRender = <p>Invalid element type specified.</p>;
  }

  return (
    <div>
      <h2>Conditional HTML Element Rendering</h2>
      {/* Render the chosen HTML element */}
      {elementToRender}
    </div>
  );
};

export default ConditionalElementVariable;
