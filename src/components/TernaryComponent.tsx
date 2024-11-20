import React from 'react';

/**
 * TernaryComponent Props Interface
 * @interface TernaryComponentProps
 * @property {boolean} isLoggedIn - Indicates if the user is logged in
 * @property {string} userName - The name of the logged-in user
 */
interface TernaryComponentProps {
  isLoggedIn: boolean;
  userName: string;
}

/**
 * TernaryComponent demonstrates conditional rendering using the ternary operator
 * with Tailwind CSS styling
 * 
 * @param {TernaryComponentProps} props - Component props
 * @returns {JSX.Element} Rendered component
 */
const TernaryComponent: React.FC<TernaryComponentProps> = ({ isLoggedIn, userName }) => {
  return (
    <div className="p-4 rounded-lg bg-white shadow-sm">
      <div className="space-y-4">
        {/* Example 1: Basic ternary operator */}
        <div className="border-b pb-4">
          <h3 className="text-lg font-semibold mb-2">Login Status:</h3>
          <p className={`${isLoggedIn ? 'text-green-600' : 'text-red-600'} font-medium`}>
            {isLoggedIn ? '✓ Logged In' : '✗ Logged Out'}
          </p>
        </div>

        {/* Example 2: Ternary with multiple elements */}
        <div className="border-b pb-4">
          <h3 className="text-lg font-semibold mb-2">Welcome Message:</h3>
          {isLoggedIn ? (
            <div className="text-primary-600">
              <p className="font-medium">Welcome back, {userName}!</p>
              <button className="btn-primary mt-2">View Profile</button>
            </div>
          ) : (
            <div className="text-gray-600">
              <p>Please log in to continue</p>
              <button className="btn bg-gray-500 text-white hover:bg-gray-600 mt-2">
                Login
              </button>
            </div>
          )}
        </div>

        {/* Example 3: Nested ternary operator */}
        <div>
          <h3 className="text-lg font-semibold mb-2">User Status:</h3>
          <p className="text-gray-700">
            {isLoggedIn 
              ? userName === 'Admin'
                ? 'Welcome, Administrator!'
                : `Welcome, ${userName} (Standard User)`
              : 'Guest User'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TernaryComponent;
