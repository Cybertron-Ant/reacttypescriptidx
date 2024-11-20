// vite.config.ts
import { defineConfig } from "file:///C:/Users/HEARTCoding/reacttypescriptidx/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/HEARTCoding/reacttypescriptidx/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { TanStackRouterVite } from "file:///C:/Users/HEARTCoding/reacttypescriptidx/node_modules/@tanstack/router-vite-plugin/dist/esm/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    TanStackRouterVite({
      routesDirectory: "./src/routes",
      generatedRouteTree: "./src/routeTree.gen.ts"
    })
  ],
  server: {
    headers: {
      "Content-Security-Policy": `
        default-src 'self';
        script-src 'self' 'unsafe-inline' 'unsafe-eval' 'wasm-unsafe-eval' chrome-extension: blob:;
        script-src-elem 'self' 'unsafe-inline' 'unsafe-eval' 'wasm-unsafe-eval' chrome-extension: blob:;
        style-src 'self' 'unsafe-inline';
        img-src 'self' data: https:;
        font-src 'self' data:;
        connect-src 'self' ws: wss:;
        worker-src 'self' blob:
      `.replace(/\s+/g, " ").trim()
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxIRUFSVENvZGluZ1xcXFxyZWFjdHR5cGVzY3JpcHRpZHhcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEhFQVJUQ29kaW5nXFxcXHJlYWN0dHlwZXNjcmlwdGlkeFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvSEVBUlRDb2RpbmcvcmVhY3R0eXBlc2NyaXB0aWR4L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCB7IFRhblN0YWNrUm91dGVyVml0ZSB9IGZyb20gJ0B0YW5zdGFjay9yb3V0ZXItdml0ZS1wbHVnaW4nXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIFRhblN0YWNrUm91dGVyVml0ZSh7XG4gICAgICByb3V0ZXNEaXJlY3Rvcnk6IFwiLi9zcmMvcm91dGVzXCIsXG4gICAgICBnZW5lcmF0ZWRSb3V0ZVRyZWU6IFwiLi9zcmMvcm91dGVUcmVlLmdlbi50c1wiLFxuICAgIH0pLFxuICBdLFxuICBzZXJ2ZXI6IHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1TZWN1cml0eS1Qb2xpY3knOiBgXG4gICAgICAgIGRlZmF1bHQtc3JjICdzZWxmJztcbiAgICAgICAgc2NyaXB0LXNyYyAnc2VsZicgJ3Vuc2FmZS1pbmxpbmUnICd1bnNhZmUtZXZhbCcgJ3dhc20tdW5zYWZlLWV2YWwnIGNocm9tZS1leHRlbnNpb246IGJsb2I6O1xuICAgICAgICBzY3JpcHQtc3JjLWVsZW0gJ3NlbGYnICd1bnNhZmUtaW5saW5lJyAndW5zYWZlLWV2YWwnICd3YXNtLXVuc2FmZS1ldmFsJyBjaHJvbWUtZXh0ZW5zaW9uOiBibG9iOjtcbiAgICAgICAgc3R5bGUtc3JjICdzZWxmJyAndW5zYWZlLWlubGluZSc7XG4gICAgICAgIGltZy1zcmMgJ3NlbGYnIGRhdGE6IGh0dHBzOjtcbiAgICAgICAgZm9udC1zcmMgJ3NlbGYnIGRhdGE6O1xuICAgICAgICBjb25uZWN0LXNyYyAnc2VsZicgd3M6IHdzczo7XG4gICAgICAgIHdvcmtlci1zcmMgJ3NlbGYnIGJsb2I6XG4gICAgICBgLnJlcGxhY2UoL1xccysvZywgJyAnKS50cmltKClcbiAgICB9XG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStTLFNBQVMsb0JBQW9CO0FBQzVVLE9BQU8sV0FBVztBQUNsQixTQUFTLDBCQUEwQjtBQUVuQyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixtQkFBbUI7QUFBQSxNQUNqQixpQkFBaUI7QUFBQSxNQUNqQixvQkFBb0I7QUFBQSxJQUN0QixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sU0FBUztBQUFBLE1BQ1AsMkJBQTJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBU3pCLFFBQVEsUUFBUSxHQUFHLEVBQUUsS0FBSztBQUFBLElBQzlCO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
