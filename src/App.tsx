import React from 'react';
import './styles/main.css';
import FocusInput from './components/FocusInput/FocusInput';

/**
 * Main App component showcasing useRef implementation
 * This component demonstrates various use cases of the useRef hook
 * through practical examples
 */
function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          useRef Hook Demo
        </h1>
        <FocusInput />
      </div>
    </div>
  );
}

export default App;
