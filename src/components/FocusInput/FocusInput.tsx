import React, { useRef, useEffect } from 'react';

/**
 * FocusInput Component
 * 
 * This component demonstrates the usage of useRef hook in React for:
 * 1. Accessing and manipulating DOM elements directly
 * 2. Persisting values between renders without causing re-renders
 * 3. Implementing auto-focus functionality
 * 
 * @returns {JSX.Element} A form with an auto-focused input and a focus button
 */
const FocusInput: React.FC = () => {
    // Create a ref for the input element
    const inputRef = useRef<HTMLInputElement>(null);
    
    // Create a ref to store render count
    const renderCount = useRef<number>(0);

    // Effect to demonstrate render counting
    useEffect(() => {
        renderCount.current += 1;
        console.log(`Component has rendered ${renderCount.current} times`);
    });

    // Effect to auto-focus input on mount
    useEffect(() => {
        // Focus the input element when component mounts
        inputRef.current?.focus();
    }, []); // Empty dependency array means this runs once on mount

    /**
     * Handler to manually focus the input element
     * Demonstrates direct DOM manipulation using refs
     */
    const handleFocusClick = () => {
        // Optional chaining ensures we only call focus if inputRef.current exists
        inputRef.current?.focus();
    };

    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
                useRef Demo: Input Focus
            </h2>
            
            <div className="space-y-4">
                {/* Input element with ref attachment */}
                <input
                    ref={inputRef}
                    type="text"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Type something..."
                />
                
                {/* Button to trigger focus */}
                <button
                    onClick={handleFocusClick}
                    className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                    Focus Input
                </button>
                
                {/* Display render count */}
                <p className="text-sm text-gray-600">
                    Render count: {renderCount.current}
                </p>
            </div>
        </div>
    );
};

export default FocusInput;
