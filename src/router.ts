/**
 * Router configuration
 * Sets up the TanStack Router with file-based routing
 */

import { createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

// Create and export the router instance
export const router = createRouter({ routeTree })

// Register router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
