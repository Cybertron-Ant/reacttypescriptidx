import React from 'react';
import './styles/main.css';
import Counter from './components/Counter/Counter';

/**
 * Main App component
 * 
 * This component serves as the entry point of our application.
 * It demonstrates the usage of useCallback through the Counter component.
 */
function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 text-center">
          useCallback Demo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Counter />
      </main>
    </div>
  );
}

export default App;
