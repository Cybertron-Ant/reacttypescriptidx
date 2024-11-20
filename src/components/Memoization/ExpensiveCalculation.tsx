import React, { useMemo } from 'react';

interface ExpensiveCalculationProps {
  number: number;
}

/**
 * ExpensiveCalculation Component
 * 
 * This component demonstrates the use of useMemo for optimizing expensive calculations.
 * It performs a computationally expensive operation (fibonacci calculation) and memoizes the result
 * to prevent unnecessary recalculations when the component re-renders.
 * 
 * @param {number} number - The input number for fibonacci calculation
 */
const ExpensiveCalculation: React.FC<ExpensiveCalculationProps> = ({ number }) => {
  /**
   * Calculates the fibonacci number recursively
   * This is intentionally implemented inefficiently to demonstrate memoization benefits
   * 
   * @param {number} n - The position in fibonacci sequence to calculate
   * @returns {number} The fibonacci number at position n
   */
  const fibonacci = (n: number): number => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  // Memoize the expensive calculation using useMemo
  // This will only recalculate when the 'number' prop changes
  const calculatedNumber = useMemo(() => {
    console.log('Calculating fibonacci...');
    return fibonacci(number);
  }, [number]);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">Expensive Calculation Result</h3>
      <p className="text-gray-700">
        Fibonacci({number}) = {calculatedNumber}
      </p>
      <p className="text-sm text-gray-500 mt-2">
        This calculation is memoized using useMemo
      </p>
    </div>
  );
};

export default ExpensiveCalculation;
