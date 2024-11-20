import React, { useReducer } from 'react';
import { counterReducer } from '../reducers/counter.reducer';
import { initialState, CounterActionTypes } from '../types/counter.types';

/**
 * Counter Component
 * 
 * A feature-rich counter component that demonstrates the use of useReducer
 * for state management in React. It includes:
 * - Increment/Decrement functionality
 * - Reset capability
 * - Custom value setting
 * - Operation history tracking
 */
const Counter: React.FC = () => {
  // Initialize the reducer with our initial state
  const [state, dispatch] = useReducer(counterReducer, initialState);

  // Handler for setting custom value
  const handleSetValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({ type: CounterActionTypes.SET_VALUE, payload: value });
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Counter with useReducer</h2>
      
      <div className="text-center">
        <h3 className="text-4xl font-bold text-indigo-600">{state.count}</h3>
        <p className="text-gray-500 mt-2">Last Operation: {state.lastOperation}</p>
      </div>

      <div className="flex space-x-4">
        <button 
          onClick={() => dispatch({ type: CounterActionTypes.INCREMENT })}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Increment
        </button>
        
        <button 
          onClick={() => dispatch({ type: CounterActionTypes.DECREMENT })}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Decrement
        </button>
        
        <button 
          onClick={() => dispatch({ type: CounterActionTypes.RESET })}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Reset
        </button>
      </div>

      <div className="w-full max-w-xs">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Set Value:
          <input 
            type="number" 
            onChange={handleSetValue}
            placeholder="Enter a number"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
      </div>

      <div className="w-full max-w-xs">
        <h4 className="text-lg font-semibold text-gray-700 mb-2">History:</h4>
        <div className="max-h-40 overflow-y-auto">
          <ul className="space-y-1">
            {state.history.map((value, index) => (
              <li 
                key={index}
                className="text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded"
              >
                Operation {index + 1}: {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Counter;
