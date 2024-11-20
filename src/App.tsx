import React from 'react';
import './styles/main.css';
import { HRProvider } from './context/HRContext';
import EmployeeList from './features/employees/EmployeeList';

/**
 * Main App component for the HR Management System
 * Demonstrates proper use of Context Provider and component organization
 */
function App() {
  return (
    <HRProvider>
      <div className="min-h-screen bg-gray-50">
        {/* Header section */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold text-gray-900">HR Management System</h1>
          </div>
        </header>

        {/* Main content section */}
        <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <EmployeeList />
        </main>
      </div>
    </HRProvider>
  );
}

export default App;
