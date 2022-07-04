const path = require('path');

/**
 * @type {import('next').NextConfig}
 */

const basePath = process.env.NEXT_PUBLIC_URL_PREFIX;

module.exports = {
  assetPrefix: basePath ? `${basePath}/` : '',
  basePath: procyarness.env.NEXT_PUBLIC_URL_PREFIX || '',

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