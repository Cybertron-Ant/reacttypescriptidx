import React, { useState, useCallback } from 'react';
import CounterButton from './CounterButton';

/**
 * Counter Component
 * 
 * This component demonstrates the proper usage of useCallback hook with a simple counter interface.
 * It showcases how to optimize performance by preventing unnecessary re-renders of child components
 * through the combination of useCallback and React.memo.
 */
const Counter: React.FC = () => {
  // State for tracking the counter value
  const [count, setCount] = useState<number>(0);
  
  // State to demonstrate re-render prevention
  const [otherState, setOtherState] = useState<boolean>(false);

  /**
   * Increment handler wrapped in useCallback
   * This function will maintain the same reference between re-renders
   * as long as its dependencies don't change
   */
  const handleIncrement = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []); // Empty dependency array since we're using the function form of setState

  /**
   * Decrement handler wrapped in useCallback
   * Similar to handleIncrement, this maintains reference equality
   */
  const handleDecrement = useCallback(() => {
    setCount(prevCount => prevCount - 1);
  }, []);

  /**
   * Reset handler wrapped in useCallback
   * Demonstrates useCallback with a specific value reset
   */
  const handleReset = useCallback(() => {
    setCount(0);
  }, []);

  /**
   * Toggle handler to demonstrate that other state changes
   * won't cause our callback functions to be recreated
   */
  const handleToggle = useCallback(() => {
    setOtherState(prev => !prev);
  }, []);

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Counter: {count}</h2>
        <p className="text-sm text-gray-500 mb-4">
          Toggle state: {otherState ? 'True' : 'False'}
        </p>
      </div>
      
      <div className="flex space-x-2 justify-center">
        <CounterButton onClick={handleDecrement} label="Decrease" />
        <CounterButton onClick={handleIncrement} label="Increase" />
      </div>
      
      <div className="flex space-x-2 justify-center mt-4">
        <CounterButton onClick={handleReset} label="Reset" />
        <CounterButton onClick={handleToggle} label="Toggle State" />
      </div>
    </div>
  );
};

export default Counter;
