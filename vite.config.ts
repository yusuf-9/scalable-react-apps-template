import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  /**
   * Proxy configuration for the development server
   * Uncomment the following code to enable proxy configuration
   * Replace "your-api-url" with the actual API URL you want to proxy
   * The proxy will be used to forward requests to the API server
   * The proxy will also log the request and response status codes to the console
   */
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "your-api-url",
  //       secure: true,
  //       changeorigin: true,
  //       configure: (proxy, options) => {
  //         proxy.on("proxyres", (proxyres, req) => {
  //           const color = proxyres.statuscode && proxyres.statuscode < 400 ? "\x1b[32m" : "\x1b[31m";
  //           console.log(`[proxy] ${req.method} ${color}${proxyres.statuscode}\x1b[0m ${req.url} -> ${options.target}${req.url}`);
  //         });
  //       },
  //     },
  //   },
  // },
})
