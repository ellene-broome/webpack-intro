// WEBPACK.JS
const path = require('path');

module.exports = {
  mode: 'production', // Set mode to production for tree-shaking
  entry: './src/index.js', // Entry point for the application
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output directory for the bundled file /dis folder
  },
  module: {
    rules: [
      {
        test: /\..css$/i, // Regex to match CSS files
        use: ['style-loader', 'css-loader'], // Loaders to handle CSS files
      },
    ],
  },
};