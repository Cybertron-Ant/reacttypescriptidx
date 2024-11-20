/**
 * Root route component and configuration
 * This serves as the main layout wrapper for all routes
 */

import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col">
      {/* Main Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8 items-center">
              <Link to="/" className="nav-link font-medium">
                Home
              </Link>
              <Link to="/about" className="nav-link font-medium">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Route Content Renderer */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            Built with TanStack Router & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  ),
})
