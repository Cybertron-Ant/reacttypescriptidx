import React from 'react';

/**
 * Props interface definition
 * Props are read-only and passed from parent components
 */
interface DisplayMessageProps {
    message: string;
    author: string;
    timestamp?: Date;
}

/**
 * DisplayMessage demonstrates the usage of props in React
 * 
 * Key Points:
 * - Props are immutable (read-only)
 * - Props are passed down from parent components
 * - Props can have optional values (marked with ?)
 * - Props changes trigger re-renders
 */
const DisplayMessage: React.FC<DisplayMessageProps> = ({ message, author, timestamp }) => {
    return (
        <div className="p-4 border rounded-lg shadow-sm bg-white">
            <h2 className="text-xl font-bold mb-4">Props Example: Message Display</h2>
            <p className="mb-2 text-gray-600">
                This component receives data through props and displays them.
                It cannot modify its props directly.
            </p>
            
            <div className="space-y-2">
                <p className="text-lg">{message}</p>
                <p className="text-sm text-gray-500">
                    By: {author}
                    {timestamp && ` • ${timestamp.toLocaleDateString()}`}
                </p>
            </div>
        </div>
    );
};

export default DisplayMessage;
