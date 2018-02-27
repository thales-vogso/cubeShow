const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: {
		'app':'./src/index.js'
	},
	devtool:'inline-source-map',
	devServer: {
		contentBase: './dist',
		hot: true
	},
	plugins:[
		new CleanWebpackPlugin('dist'),
		new HtmlWebpackPlugin({
			template:'src/index.html',
			minify:{html5:true},
			title:'cubeshow'
		}),
		//new UglifyJSPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	module:{
		rules:[
			{
				test:/\.css$/,
				use:['style-loader','css-loader']
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'images/[name].[ext]'
						}
					}
				]
			},
			{
				test:/\.(htm|html)$/,
				use:[{
					loader:'html-loader',
					options:{
						//minimize:true,
						interpolate:true
					}
				}]
			}
		]
	},
	output: {
		filename: './js/bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};