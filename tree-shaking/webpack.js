// WEBPACK.JS
const path = require('path');

module.exports = {
  entry: './src/index.js', // Corrected path to src/index.js which is in the top file directory
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output directory for the bundled file /dis folder
  },
    mode: 'development', // Set the mode to development or production as needed
};