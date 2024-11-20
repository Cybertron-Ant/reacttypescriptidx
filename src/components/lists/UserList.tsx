import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

/**
 * UserList Component
 * 
 * This component demonstrates the proper use of lists and keys in React
 * It renders a list of users with their details in a responsive grid layout
 * 
 * Key Features:
 * - Uses TypeScript interfaces for type safety
 * - Implements proper key usage for list items
 * - Demonstrates responsive design with Tailwind CSS
 * - Shows conditional rendering within list items
 * 
 * @component
 * @example
 * const users = [
 *   { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" }
 * ];
 * return <UserList users={users} />;
 */
interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">User Directory</h2>
      
      {/* User list container with responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          // Each user card with unique key prop
          <div
            key={user.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            {/* User avatar placeholder */}
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-primary-600 font-semibold text-lg">
                {user.name.charAt(0)}
              </span>
            </div>
            
            {/* User details */}
            <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
            <p className="text-gray-600 text-sm mt-1">{user.email}</p>
            
            {/* Role badge */}
            <span className={`
              inline-block px-2 py-1 mt-2 text-xs font-semibold rounded-full
              ${user.role === 'Admin' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}
            `}>
              {user.role}
            </span>
          </div>
        ))}
      </div>
      
      {/* Empty state handling */}
      {users.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No users found in the directory.
        </div>
      )}
    </div>
  );
};

export default UserList;
