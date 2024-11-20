import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite({
      routesDirectory: "./src/routes",
      generatedRouteTree: "./src/routeTree.gen.ts",
    }),
  ],
  server: {
    headers: {
      'Content-Security-Policy': `
        default-src 'self';
        script-src 'self' 'unsafe-inline' 'unsafe-eval' 'wasm-unsafe-eval' chrome-extension: blob:;
        script-src-elem 'self' 'unsafe-inline' 'unsafe-eval' 'wasm-unsafe-eval' chrome-extension: blob:;
        style-src 'self' 'unsafe-inline';
        img-src 'self' data: https:;
        font-src 'self' data:;
        connect-src 'self' ws: wss:;
        worker-src 'self' blob:
      `.replace(/\s+/g, ' ').trim()
    }
  }
})
