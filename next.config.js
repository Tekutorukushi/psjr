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
};
