const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');  // Import the plugin

module.exports = {
  entry: './src/index.js',  // Entry point for your app
  output: {
    path: path.resolve(__dirname, 'dist'),  // Output directory
    filename: 'bundle.js',  // Name of the bundled file
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // For JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],  // Babel preset for modern JavaScript
          },
        },
      },
      {
        test: /\.css$/,  // For CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',  // Template file to use
    }),
  ],
};
// welp
