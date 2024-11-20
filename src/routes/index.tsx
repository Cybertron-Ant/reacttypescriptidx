/**
 * Index route component and configuration
 * Serves as the landing page of the application
 */

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Welcome to Our App
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          A modern React application with TanStack Router and Tailwind CSS
        </p>
        <div className="space-x-4">
          <button className="btn-primary">
            Get Started
          </button>
          <button className="btn-secondary">
            Learn More
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Type-Safe Routing
          </h2>
          <p className="text-gray-600">
            Enjoy the benefits of type-safe routing with TanStack Router,
            ensuring your application's routing is reliable and maintainable.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Modern Styling
          </h2>
          <p className="text-gray-600">
            Built with Tailwind CSS, enabling rapid UI development with
            utility-first CSS framework.
          </p>
        </div>
      </div>
    </div>
  ),
})
