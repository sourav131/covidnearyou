const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');
const withSass = require('@zeit/next-sass');

module.exports = withPlugins([[withOptimizedImages], [withSass, { cssModules: true }]]);
