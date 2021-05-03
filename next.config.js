const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  distDir: 'dist',
  typescript: {
    ignoreBuildErrors: !isProd
  }
};
