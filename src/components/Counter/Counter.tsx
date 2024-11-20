import React, { useState } from 'react';

interface CounterProps {
  /** Initial value for the counter */
  initialValue?: number;
  /** Step value for increment/decrement */
  step?: number;
  /** Optional label for the counter */
  label?: string;
}

/**
 * Counter component that demonstrates basic state management and props usage
 * 
 * @component
 * @example
 * ```tsx
 * <Counter initialValue={0} step={1} label="My Counter" />
 * ```
 */
export const Counter: React.FC<CounterProps> = ({
  initialValue = 0,
  step = 1,
  label = 'Counter'
}) => {
  // State to track the current count value
  const [count, setCount] = useState(initialValue);

  /**
   * Increments the counter by the step value
   */
  const handleIncrement = () => {
    setCount(prevCount => prevCount + step);
  };

  /**
   * Decrements the counter by the step value
   */
  const handleDecrement = () => {
    setCount(prevCount => prevCount - step);
  };

  /**
   * Resets the counter to its initial value
   */
  const handleReset = () => {
    setCount(initialValue);
  };

  return (
    <div className="counter" data-testid="counter-component">
      <h2>{label}</h2>
      <div className="counter-display" data-testid="counter-display">
        {count}
      </div>
      <div className="counter-controls">
        <button
          onClick={handleDecrement}
          data-testid="decrement-button"
          aria-label="Decrement"
        >
          -
        </button>
        <button
          onClick={handleReset}
          data-testid="reset-button"
          aria-label="Reset"
        >
          Reset
        </button>
        <button
          onClick={handleIncrement}
          data-testid="increment-button"
          aria-label="Increment"
        >
          +
        </button>
      </div>
    </div>
  );
};
