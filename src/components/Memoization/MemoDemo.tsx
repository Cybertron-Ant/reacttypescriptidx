import React, { useState } from 'react';
import ExpensiveCalculation from './ExpensiveCalculation';

/**
 * MemoDemo Component
 * 
 * This component demonstrates the practical usage of useMemo by providing
 * a user interface to trigger re-renders and show the benefits of memoization.
 * It includes both memoized and non-memoized state updates to showcase the difference.
 */
const MemoDemo: React.FC = () => {
  // State for the fibonacci calculation input
  const [number, setNumber] = useState<number>(20);
  
  // State that will trigger re-renders but won't affect the calculation
  const [count, setCount] = useState<number>(0);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">useMemo Demonstration</h2>
      
      {/* Fibonacci calculation section */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Fibonacci Number Input
        </label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Math.min(40, Math.max(0, parseInt(e.target.value) || 0)))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        <p className="text-sm text-gray-500 mt-1">
          Try numbers between 0-40 (larger numbers may cause performance issues)
        </p>
      </div>

      {/* Display the expensive calculation result */}
      <ExpensiveCalculation number={number} />

      {/* Counter section to demonstrate re-renders */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Re-render Counter</h3>
        <p className="text-gray-700 mb-4">
          This counter triggers re-renders but doesn't affect the memoized calculation: {count}
        </p>
        <button
          onClick={() => setCount(c => c + 1)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Increment Counter
        </button>
      </div>

      {/* Explanation section */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">How it Works</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>The Fibonacci calculation is memoized using useMemo</li>
          <li>It only recalculates when the input number changes</li>
          <li>The counter updates don't trigger recalculation</li>
          <li>Open the console to see when calculations occur</li>
        </ul>
      </div>
    </div>
  );
};

export default MemoDemo;
