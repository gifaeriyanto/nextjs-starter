const path = require('path');

const nextConfig = {
  // your config

  // webpack config
  webpack(config, _options) {
    config.resolve.alias['@pages'] = path.join(__dirname, 'pages');
    config.resolve.alias['@containers'] = path.join(__dirname, 'containers');

    return config;
  },
};

module.exports = nextConfig;
