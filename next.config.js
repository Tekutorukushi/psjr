module.exports = {
  distDir: 'dist',
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: '/healthz',
        destination: '/api/healthz',
      },
      {
        source: '/readyz',
        destination: '/api/readyz',
      },
    ];
  },
  serverRuntimeConfig: {
    secureBackendUrl: process.env.SERVER_BACKEND_URL,
  },
  publicRuntimeConfig: {
    backendUrl: process.env.CLIENT_BACKEND_URL,
  },
};
