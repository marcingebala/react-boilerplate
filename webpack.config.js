/* eslint-disable */
var ExtractTextPlugin = require('extract-text-webpack-plugin'),
		CopyWebpackPlugin = require('copy-webpack-plugin'),
		path = require('path');

module.exports = {
	entry : [
		'./src/main.js'
	],

  output: {
    path: __dirname + '/dist',
    publicPath: '/',
		filename: 'main.js',
	},

  resolve: {
		extensions: ['.js','.jsx','.scss']
	},

	module:{
		loaders: [
			{
				test: /\.(js|jsx)$/,
    		loader: 'babel-loader',
    		exclude: /node_modules/,
    		query: {
        	presets: ['es2015','react','stage-0']
    		}
			},
			{
			  test: /\.scss$/,
			  loaders: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
			},
		]
	},

  plugins: [
  	new ExtractTextPlugin('style.css'),
  	new CopyWebpackPlugin([
  		{ context: './src', from: 'index.html', to: './index.html' },
      { context: './src/assets', from: '**/*.*', to: './assets' }
  	])
  ],

  devServer: {
    port: 8000,
    inline: true,
    contentBase: path.resolve(__dirname, './src'),
  }

}
