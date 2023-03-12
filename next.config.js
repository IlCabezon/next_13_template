module.exports = {
  swcMinify: true,
  experimental: {
    appDir: true
  },
  env: {
    SERVER_URL: process.env.NODE_ENV,
  },
  images: {
    domains: [],
  },
};
