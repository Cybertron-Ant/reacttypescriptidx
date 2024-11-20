import React from 'react';
import './styles/main.css';
import MemoDemo from './components/Memoization/MemoDemo';

/**
 * Main App component
 * Demonstrates the usage of useMemo through the MemoDemo component
 */
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-primary-600">useMemo Performance Optimization Demo</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <MemoDemo />
      </main>
    </div>
  );
}

export default App;
