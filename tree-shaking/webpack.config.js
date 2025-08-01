// WEBPACK.JS
const path = require('path');

module.exports = {
  mode: 'production', // Enable tree-shaking
  entry: './src/index.js', // Your main JavaScript file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output folder (dist/)
    clean: true, // Optional: clears dist/ before build
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // FIXED: match .css files (you had an extra dot: \..css)
        use: ['style-loader', 'css-loader'], // Injects CSS into the DOM
      },
    ],
  },
};
