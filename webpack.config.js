module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: 'public',
    publicPath: ''
  },

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: { presets: ['es2015', 'react'] }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }

}
