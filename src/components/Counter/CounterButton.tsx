import React, { memo } from 'react';

interface CounterButtonProps {
  onClick: () => void;
  label: string;
}

/**
 * CounterButton Component
 * 
 * A memoized button component that renders a button with a specific label and click handler.
 * This component is wrapped in React.memo to prevent unnecessary re-renders when its props haven't changed.
 * It's designed to work with useCallback in the parent component for optimal performance.
 * 
 * @param {CounterButtonProps} props - The component props
 * @param {Function} props.onClick - Callback function to handle button clicks
 * @param {string} props.label - Text to display on the button
 */
const CounterButton: React.FC<CounterButtonProps> = memo(({ onClick, label }) => {
  console.log(`CounterButton rendered: ${label}`); // Helps demonstrate render optimization

  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
    >
      {label}
    </button>
  );
});

CounterButton.displayName = 'CounterButton';

export default CounterButton;
