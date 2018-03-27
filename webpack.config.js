const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
		new webpack.optimize.UglifyJsPlugin({
			output: {
				comments: false
			},
			compress: {
				warnings: false
			}
		}),
		new ExtractTextPlugin({
			filename:'[name].css',
			publicPath:'/m/',
			allChunks: true
		}),
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
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							regExp: /(\w+)[\/|\\](\w+)\.(png|jpg|gif)/i,
							//name: 'images/[1]-[name].[ext]'
							name(file){
								return 'images/[1]-[name].[ext]';
							}
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
			
			,{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015'],
						plugins: [
							"syntax-dynamic-import",
							"transform-object-rest-spread",
							"transform-class-properties"
						]
					}
				}
			}
			
		]
	},
	output: {
		filename: './js/[name].bundle.js',
		chunkFilename: './js/[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};