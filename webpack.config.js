module.exports = {

  //define entry point
  entry: './src/script-1.js',

  //definte output point
  output: {
    path:'dist',
    filename: 'bundle.js'
  },
  //make transformations
  module: {
    loaders: [
      {
        //test for any .js file
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets:['env']
        }
      }
    ]
  }

}
