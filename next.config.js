const path = require('path');

/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  assetPrefix: '/dojo-wishlist/',
  basePath: '/dojo-wishlist',

  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'style')],
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};