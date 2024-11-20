import React, { useState } from 'react';
import StatefulCounter from './StatefulCounter';
import DisplayMessage from './DisplayMessage';

/**
 * ParentComponent demonstrates the relationship between Props and State
 * 
 * Key Points:
 * - Parent components can manage state and pass it as props to children
 * - State updates in parent trigger re-renders of children
 * - Children receive data through props but cannot modify parent's state directly
 */
const ParentComponent: React.FC = () => {
    // State declarations
    const [message, setMessage] = useState<string>('Hello, React!');
    const [author, setAuthor] = useState<string>('User');

    // Event handler to update state
    const updateMessage = () => {
        setMessage(`Updated at ${new Date().toLocaleTimeString()}`);
        setAuthor(`User ${Math.floor(Math.random() * 100)}`);
    };

    return (
        <div className="space-y-8">
            <div className="p-4 border rounded-lg shadow-sm bg-white">
                <h1 className="text-2xl font-bold mb-4">Props vs State Demo</h1>
                <p className="text-gray-600 mb-4">
                    This demo shows how props and state work together in React:
                    <ul className="list-disc ml-6 mt-2">
                        <li>State is managed in this parent component</li>
                        <li>State is passed as props to child components</li>
                        <li>Child components receive updates through props</li>
                        <li>StatefulCounter manages its own internal state</li>
                    </ul>
                </p>
                
                <button 
                    onClick={updateMessage}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Update Message
                </button>
            </div>

            {/* Pass state as props to DisplayMessage */}
            <DisplayMessage 
                message={message}
                author={author}
                timestamp={new Date()}
            />

            {/* StatefulCounter manages its own state */}
            <StatefulCounter />
        </div>
    );
};

export default ParentComponent;
