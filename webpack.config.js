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
    loaders: [ //Babel Loader
      {
        //test for any .js file
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets:['env']
        }
      }, //end of babel loader

      {
        test: /\.css$/,
        loader: 'style-loader!css-loader', //using both in the same time
      }, //end of css and style loader
    ]
  }

}
