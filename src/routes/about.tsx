/**
 * About route component and configuration
 * Provides information about the application
 */

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: () => (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-8 md:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            About Our Platform
          </h1>
          
          <div className="prose prose-lg text-gray-600 mb-8">
            <p className="mb-4">
              Welcome to our modern React application! We've built this platform
              using cutting-edge technologies to provide the best possible
              development and user experience.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Core Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-primary-600 mb-2">React & TypeScript</h3>
              <p className="text-gray-600">
                Built with React 18 and TypeScript for type-safe development
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-primary-600 mb-2">TanStack Router</h3>
              <p className="text-gray-600">
                Type-safe routing with file-based route configuration
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Modern Development
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-primary-600 mb-2">Vite</h3>
              <p className="text-gray-600">
                Lightning-fast build tool with instant HMR
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-primary-600 mb-2">Tailwind CSS</h3>
              <p className="text-gray-600">
                Utility-first CSS framework for rapid UI development
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
})
