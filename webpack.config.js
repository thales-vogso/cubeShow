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
		new UglifyJSPlugin(),
		new webpack.ProvidePlugin({
			THREE:"three",
			createjs:"latest-createjs"
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	module:{
		rules:[
			{
				test:/\.css$/i,
				use:['style-loader','css-loader']
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							regExp: /(\w+)[\/|\\](\w+)\.(png|jpg|gif)/i,
							name: 'images/[1]-[name].[ext]'
						}
					},
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								progressive: true,
								quality: 65
							},
							// optipng.enabled: false will disable optipng
							optipng: {
								enabled: false,
							},
							pngquant: {
								quality: '65-90',
								speed: 4
							},
							gifsicle: {
								interlaced: false,
							},
							// the webp option will enable WEBP
							webp: {
								quality: 75
							}
						}
					}
				]
			},
			{
				test: /\.(wav|mp3)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'sounds/[name].[ext]'
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
		filename: './js/[name].bundle.js',
		chunkFilename: './js/[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};