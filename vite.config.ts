import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(() => {
  // Validate that NODE_ENV is set and corresponds to an environment file
  if (!process.env.NODE_ENV) {
    console.error('❌ Error: NODE_ENV is required but not set.')
    console.error('Available environments: dev, test, prod, xyz')
    console.error('Usage: NODE_ENV=dev npm run dev:dev')
    process.exit(1)
  }

  const validEnvs = ['dev', 'test', 'prod']
  if (!validEnvs.includes(process.env.NODE_ENV)) {
    console.error(`❌ Error: Invalid NODE_ENV "${process.env.NODE_ENV}"`)
    console.error(`Available environments: ${validEnvs.join(', ')}`)
    process.exit(1)
  }

  // Load environment variables from the appropriate file
  const env = loadEnv(process.env.NODE_ENV, path.resolve(__dirname, 'environments'), '')
  
  console.log(`✅ Loaded environment: ${process.env.NODE_ENV}`)
  console.log(`📁 Environment file: environments/.env.${process.env.NODE_ENV}`)
  
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    define: {
      // Make environment variables available to the app
      'process.env': env
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
  }
})
