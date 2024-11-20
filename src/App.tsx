import React from 'react';
import './styles/main.css';
import ParentComponent from './components/PropsVsState/ParentComponent';

/**
 * Main App component showcasing Props vs State concepts
 * This component serves as the entry point for our Props vs State demonstration
 */
function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <ParentComponent />
    </div>
  );
}

export default App;
