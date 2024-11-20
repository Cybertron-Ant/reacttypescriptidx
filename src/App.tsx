import React from 'react';
import './styles/main.css';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeDemo/ThemeToggle';

/**
 * Main App component showcasing Context API usage
 * Demonstrates how to use ThemeContext and its consumer components
 */
function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        {/* Header section */}
        <header className="shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold">Context API Demo</h1>
          </div>
        </header>

        {/* Main content section */}
        <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Theme toggle demonstration */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Theme Context Demo</h2>
              <ThemeToggle />
            </section>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
