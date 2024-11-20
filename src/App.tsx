import React from 'react';
import './styles/main.css';
import UserList from './components/lists/UserList';
import { sampleUsers } from './components/lists/UserData';

/**
 * Main App component demonstrating Lists and Keys in React
 * 
 * This component showcases:
 * - Proper list rendering with unique keys
 * - TypeScript integration
 * - Component composition
 * - Responsive design with Tailwind CSS
 */
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-primary-600">React Lists and Keys Demo</h1>
        </div>
      </header>

      {/* Main content section */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <UserList users={sampleUsers} />
      </main>
    </div>
  );
}

export default App;
