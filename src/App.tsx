import React from 'react';
import './styles/main.css';
import MouseTracker from './components/shared/MouseTracker';
import DataFetcher from './components/shared/DataFetcher';

/**
 * Main App component demonstrating the Render Props pattern
 * This component showcases two different implementations of render props:
 * 1. MouseTracker - Tracks and provides mouse position
 * 2. DataFetcher - Handles data fetching and provides fetch state
 */
function App() {
  // Interface for our mock data
  interface Post {
    id: number;
    title: string;
    body: string;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-primary-600">Render Props Pattern Demo</h1>
        </div>
      </header>

      {/* Main content section */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* MouseTracker demo */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-4">Mouse Position Tracker</h2>
            <MouseTracker>
              {({ x, y }) => (
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800">
                    Mouse Position: ({x}, {y})
                  </p>
                </div>
              )}
            </MouseTracker>
          </div>

          {/* DataFetcher demo */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-4">Data Fetcher</h2>
            <DataFetcher<Post> url="https://jsonplaceholder.typicode.com/posts/1">
              {({ data, loading, error }) => {
                if (loading) return <div className="text-gray-600">Loading...</div>;
                if (error) return <div className="text-red-600">Error: {error.message}</div>;
                if (!data) return <div className="text-gray-600">No data available</div>;

                return (
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h3 className="text-xl font-semibold text-green-800">{data.title}</h3>
                    <p className="text-green-700 mt-2">{data.body}</p>
                  </div>
                );
              }}
            </DataFetcher>
          </div>
        </div>

        {/* Advanced MouseTracker usage with additional data */}
        <div className="mt-8 card">
          <h2 className="text-2xl font-bold mb-4">Advanced Mouse Tracker</h2>
          <MouseTracker<{ color: string }> 
            additionalData={{ color: 'rgb(59, 130, 246)' }}
          >
            {({ x, y, color }) => (
              <div 
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: color,
                  position: 'fixed',
                  left: x,
                  top: y,
                  transform: 'translate(-50%, -50%)',
                  pointerEvents: 'none'
                }}
              />
            )}
          </MouseTracker>
        </div>
      </main>
    </div>
  );
}

export default App;
