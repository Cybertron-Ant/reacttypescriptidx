import React, { useState } from 'react';
import './styles/main.css';
import UserProfile from './components/ConditionalRendering/UserProfile';
import FeatureToggle from './components/ConditionalRendering/FeatureToggle';

/**
 * Main App component demonstrating various conditional rendering patterns
 * This component showcases different approaches to conditional rendering in React
 */
function App() {
  // Sample user data
  const [user] = useState({
    username: 'John Doe',
    role: 'admin' as const,
    isActive: true
  });

  // Sample features data
  const [features, setFeatures] = useState([
    {
      id: '1',
      name: 'Dark Mode',
      enabled: true,
      description: 'Enable dark mode across the application'
    },
    {
      id: '2',
      name: 'Beta Features',
      enabled: false,
      description: 'Access to upcoming features'
    },
    {
      id: '3',
      name: 'Advanced Analytics',
      enabled: false,
      description: 'View detailed analytics and reports'
    }
  ]);

  // Handler for feature toggle
  const handleFeatureToggle = (featureId: string) => {
    setFeatures(features.map(feature =>
      feature.id === featureId
        ? { ...feature, enabled: !feature.enabled }
        : feature
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">Conditional Rendering Demo</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* User Profile Section */}
          <section>
            <h2 className="text-xl font-semibold mb-4">User Profile</h2>
            <UserProfile
              username={user.username}
              role={user.role}
              isActive={user.isActive}
            />
          </section>

          {/* Feature Toggle Section */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Feature Toggles</h2>
            <FeatureToggle
              features={features}
              onToggle={handleFeatureToggle}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
