import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';

/**
 * Main Application Component
 * 
 * This component serves as the root of the application and sets up the routing configuration.
 * It uses React Router v6 for routing and Tailwind CSS for styling.
 * 
 * Key Components:
 * - Router: Provides routing context to the application
 * - Routes: Groups Route components
 * - Route: Defines individual route configurations
 * 
 * @returns {JSX.Element} The rendered application with routing setup
 */
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation component provides links for routing */}
        <Navigation />
        
        {/* Main content area */}
        <main className="min-h-[calc(100vh-4rem)]">
          <Routes>
            {/* Home page route */}
            <Route path="/" element={<Home />} />
            
            {/* About page route */}
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
