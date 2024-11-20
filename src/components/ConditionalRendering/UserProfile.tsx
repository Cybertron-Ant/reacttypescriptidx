import React from 'react';

interface UserProfileProps {
  username: string;
  role: 'admin' | 'user';
  isActive: boolean;
}

/**
 * UserProfile Component
 * 
 * Demonstrates conditional rendering techniques in React using:
 * 1. Ternary operators
 * 2. Logical && operator
 * 3. Multiple conditions
 * 
 * @param {UserProfileProps} props - Component props containing user information
 * @returns {JSX.Element} Rendered component with conditionally rendered elements
 */
const UserProfile: React.FC<UserProfileProps> = ({ username, role, isActive }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {/* Basic conditional rendering using && operator */}
      {isActive && (
        <span className="inline-block px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full mb-4">
          Active
        </span>
      )}

      <h2 className="text-2xl font-bold mb-4">{username}</h2>

      {/* Conditional rendering using ternary operator */}
      <div className="mb-4">
        <span className="font-medium">Status: </span>
        {isActive ? (
          <span className="text-green-600">Online</span>
        ) : (
          <span className="text-gray-600">Offline</span>
        )}
      </div>

      {/* Multiple conditions using nested ternary */}
      <div className="mb-4">
        <span className="font-medium">Access Level: </span>
        {role === 'admin' ? (
          <span className="text-purple-600">Administrator</span>
        ) : role === 'user' ? (
          <span className="text-blue-600">Regular User</span>
        ) : (
          <span className="text-gray-600">Unknown Role</span>
        )}
      </div>

      {/* Conditional styling */}
      <button
        className={`px-4 py-2 rounded-md ${
          role === 'admin'
            ? 'bg-purple-600 hover:bg-purple-700'
            : 'bg-blue-600 hover:bg-blue-700'
        } text-white transition-colors`}
      >
        {role === 'admin' ? 'Access Admin Panel' : 'View Dashboard'}
      </button>
    </div>
  );
};

export default UserProfile;
