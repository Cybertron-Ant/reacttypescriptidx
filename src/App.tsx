import React from 'react';
import './styles/main.css';
import TernaryComponent from './components/TernaryComponent';

/**
 * Main App component demonstrating Tailwind CSS usage
 * This component showcases various Tailwind utility classes and custom components
 */
function App() {

  // Change these values to test the ternary operator behavior
  const userLoggedIn = true;
  const currentUserName = 'Alice';

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header section with custom styling */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-primary-600">Welcome to the Ternary Operator Demo App</h1>
        </div>
      </header>

      {/* Main content section */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Example card using custom component class */}
        <div className="card">
          <h2 className="text-2xl font-bold mb-4">Getting Started with Tailwind and Ternary Operator</h2>
          <p className="text-gray-600 mb-4">
            This is an example of how to use Tailwind CSS in your React application.
          </p>
          {/* Render the TernaryComponent with the specified props */}
          <TernaryComponent isLoggedIn={userLoggedIn} userName={currentUserName} />
          {/* Example button using custom component class */}
          <button className="btn-primary">
            Learn More
          </button>
        </div>

        {/* Grid layout example */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Feature cards */}
          {[1, 2, 3].map((item) => (
            <div key={item} className="card hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">Feature {item}</h3>
              <p className="text-gray-600">
                This is a feature card that demonstrates responsive design and hover effects.
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer section */}
      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
