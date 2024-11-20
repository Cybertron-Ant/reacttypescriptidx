import React from 'react';
import './styles/main.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import FeatureGrid from './components/features/FeatureGrid';

/**
 * Main App Component
 * 
 * Root component of the application that composes the layout
 * and manages the main application state
 * 
 * @component
 */
const App: React.FC = () => {
  // Sample features data
  const features = [
    {
      id: 1,
      title: 'Modern Architecture',
      description: 'Built with React functional components and TypeScript for type safety.',
    },
    {
      id: 2,
      title: 'Responsive Design',
      description: 'Fully responsive layout using Tailwind CSS utility classes.',
    },
    {
      id: 3,
      title: 'Best Practices',
      description: 'Follows React and TypeScript best practices with detailed documentation.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="React TypeScript Demo" />
      
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="card">
          <h2 className="text-2xl font-bold mb-4">Welcome to Our Application</h2>
          <p className="text-gray-600 mb-4">
            This is a modern React application built with TypeScript and Tailwind CSS.
          </p>
          <button className="btn-primary">
            Get Started
          </button>
        </div>

        <FeatureGrid features={features} />
      </main>

      <Footer companyName="Your Company" />
    </div>
  );
};

export default App;
