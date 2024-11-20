import React, { useState } from 'react';

/**
 * StatefulCounter demonstrates the usage of local state in React
 * 
 * Key Points:
 * - State is mutable and managed internally by the component
 * - State updates trigger re-renders
 * - useState hook provides state management capabilities
 */
const StatefulCounter: React.FC = () => {
    // Local state declaration using useState hook
    const [count, setCount] = useState<number>(0);
    
    // Event handlers that modify state
    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);
    
    return (
        <div className="p-4 border rounded-lg shadow-sm bg-white">
            <h2 className="text-xl font-bold mb-4">State Example: Counter</h2>
            <p className="mb-2 text-gray-600">
                This counter maintains its own state internally.
                When state changes, the component re-renders.
            </p>
            
            <div className="flex items-center gap-4">
                <button 
                    onClick={decrement}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    -
                </button>
                <span className="text-2xl font-bold">{count}</span>
                <button 
                    onClick={increment}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default StatefulCounter;
