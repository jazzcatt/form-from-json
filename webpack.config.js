var path = require('path');
var webpack = require('webpack');
var NODE_ENV = process.env.NODE_ENV || 'development';


module.exports = {
	entry: './src/js/main.js',
	output: {
		path: __dirname+'/public/dist', 
		filename: 'bundle.js'
	},

	plugins: [
		new webpack.DefinePlugin({
			NODE_ENV: String(NODE_ENV)
		}),
	],

	watch: NODE_ENV=='development',
	devtool: NODE_ENV=='development'?'chap-inline-module-source-map':null,

	module: {
		loaders: [
			{
				test: /.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
};


if(NODE_ENV=='production') {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				unsafe: true,
				drop_console: true
			}
		})
	);
}