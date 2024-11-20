import React from 'react';
import './styles/main.css';
import LifecycleDemo from './components/lifecycle/LifecycleDemo';

/**
 * Main App component
 * Demonstrates React component lifecycle using hooks
 */
function App() {

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-primary-600">React Component Lifecycle Demo</h1>
        </div>
      </header>

      {/* Main content section */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <LifecycleDemo />
      </main>
    </div>
  );
}

export default App;
