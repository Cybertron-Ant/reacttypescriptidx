import React, { useRef, useCallback } from 'react';
import TextInput from './TextInput';
import FocusableCard from './FocusableCard';

/**
 * Container component that demonstrates various use cases of refs in React
 * This component showcases different patterns and best practices for using refs
 * 
 * @component
 */
const RefsDemoContainer: React.FC = () => {
  // Create refs for our components
  const inputRef = useRef<HTMLInputElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  /**
   * Handler to focus the input element
   * Demonstrates programmatic focus control using refs
   */
  const handleFocusInput = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  /**
   * Handler to focus the card element
   * Shows how refs can be used with custom components
   */
  const handleFocusCard = useCallback(() => {
    cardRef.current?.focus();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        React Refs Demo
      </h1>

      <div className="space-y-6">
        {/* Text Input with ref */}
        <TextInput
          ref={inputRef}
          label="Demo Input"
          placeholder="This input can be focused programmatically"
        />

        {/* Focusable Card with ref */}
        <FocusableCard ref={cardRef}>
          <h2 className="text-xl font-semibold mb-4">
            Interactive Card
          </h2>
          <p className="text-gray-600 mb-4">
            This card can receive focus through both click and programmatic control.
          </p>
        </FocusableCard>

        {/* Control buttons */}
        <div className="flex space-x-4">
          <button
            onClick={handleFocusInput}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Focus Input
          </button>
          <button
            onClick={handleFocusCard}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
          >
            Focus Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default RefsDemoContainer;
