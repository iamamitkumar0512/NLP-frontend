const path = require( 'path' );
const webpack = require( 'webpack' );
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const WorkboxPlugin = require( 'workbox-webpack-plugin' );

module.exports = {
	entry: './src/client/index.js',
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: [
					/node_modules/,
					/jest/
				],
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				use: [ 'style-loader', 'css-loader', 'sass-loader' ]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/client/views/index.html',
			filename: './index.html'
		}),
		new WorkboxPlugin.GenerateSW()
	],
	output: {
		libraryTarget: 'var',
		library: 'App'
	}
};