/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    '@prefresh/snowpack',
    '@snowpack/plugin-sass',
    [
      '@snowpack/plugin-webpack',
      {
        /* ... */
        outputPattern: {
          js: 'js/checkout-bundle.js',
          css: 'css/checkout-bundle.css',
        },
        extendConfig: (config) => {
          delete config.optimization.splitChunks;
          delete config.optimization.runtimeChunk;
          return config;
        },
      },
    ],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
