module.exports = {
  context: __dirname,
  entry: './index.jsx',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  // devtool: 'source-maps',
  externals: {
    "isomorphic-fetch": "fetch",
  }
};
