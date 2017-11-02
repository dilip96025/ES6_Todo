var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: __dirname + '/build/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{ 
      test: /\.js$/, 
      exclude: /node_modules/, 
      loader: "babel-loader" 
    }]
  }
};