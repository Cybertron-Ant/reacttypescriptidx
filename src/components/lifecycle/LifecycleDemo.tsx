import React, { useState, useEffect } from 'react';

/**
 * LifecycleDemo Component
 * 
 * This component demonstrates the key lifecycle phases in React using hooks:
 * 1. Mounting (Component Creation)
 * 2. Updating (State/Props Changes)
 * 3. Unmounting (Component Destruction)
 * 
 * It includes examples of:
 * - useState for state management
 * - useEffect for lifecycle events
 * - Cleanup functions
 * - Conditional rendering
 */
const LifecycleDemo: React.FC = () => {
    // State declarations
    const [count, setCount] = useState<number>(0);
    const [data, setData] = useState<string>('');
    const [isVisible, setIsVisible] = useState<boolean>(true);

    /**
     * Mounting Phase Effect (runs once)
     * Equivalent to componentDidMount in class components
     */
    useEffect(() => {
        console.log('🟢 Component Mounted');
        
        // Simulating an API call
        const fetchData = async () => {
            // Simulated delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            setData('Initial data loaded');
        };
        
        fetchData();

        // Cleanup function (componentWillUnmount equivalent)
        return () => {
            console.log('🔴 Component Will Unmount');
            // Cleanup tasks (e.g., removing event listeners, canceling subscriptions)
        };
    }, []); // Empty dependency array means this runs once on mount

    /**
     * Update Phase Effect
     * Runs whenever count changes (componentDidUpdate equivalent)
     */
    useEffect(() => {
        console.log('🔄 Count updated:', count);
        
        // Demonstrate cleanup on state changes
        return () => {
            console.log('Cleaning up previous count effect');
        };
    }, [count]); // Dependency array with count

    /**
     * Update Phase Effect for data changes
     */
    useEffect(() => {
        if (data) {
            console.log('📦 Data updated:', data);
        }
    }, [data]); // Dependency array with data

    // Event Handlers
    const handleIncrement = () => setCount(prev => prev + 1);
    const handleUpdateData = () => setData(`Updated data: ${new Date().toLocaleTimeString()}`);
    const handleToggleVisibility = () => setIsVisible(prev => !prev);

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-4">React Lifecycle Demo</h2>
            
            <div className="space-y-4">
                {/* Counter Section */}
                <div className="border-b pb-4">
                    <p className="mb-2">Count: {count}</p>
                    <button 
                        onClick={handleIncrement}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Increment
                    </button>
                </div>

                {/* Data Section */}
                <div className="border-b pb-4">
                    <p className="mb-2">Data: {data}</p>
                    <button 
                        onClick={handleUpdateData}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                        Update Data
                    </button>
                </div>

                {/* Visibility Toggle */}
                <div>
                    <button 
                        onClick={handleToggleVisibility}
                        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                    >
                        {isVisible ? 'Hide Content' : 'Show Content'}
                    </button>
                    
                    {isVisible && (
                        <div className="mt-4 p-4 bg-gray-100 rounded">
                            <p>This content can be toggled to demonstrate unmounting!</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Debug Info */}
            <div className="mt-6 text-sm text-gray-600">
                <p>Open the console to see lifecycle logs!</p>
            </div>
        </div>
    );
};

export default LifecycleDemo;
