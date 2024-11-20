import React from 'react';
import './styles/main.css';
import EventsPage from './features/Events/pages/EventsPage';

/**
 * Main App component for the HR Management System
 */
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-primary-600">HR Management System</h1>
        </div>
      </header>

      <main>
        <EventsPage />
      </main>

      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center">&copy; 2024 HR Management System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
