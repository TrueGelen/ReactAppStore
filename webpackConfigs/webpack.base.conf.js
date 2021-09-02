// const webpack = require('webpack');
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
	src: path.resolve(__dirname, '../src'),
	dist: path.resolve(__dirname, '../dist'),
	static: 'assets/'
}

const plugins = [
	new MiniCssExtractPlugin({
		filename: `${PATHS.static}css/[name].css`,
	}),
	new HtmlWebpackPlugin({
		template: `${PATHS.src}/index.html`,
		filename: './index.html',
	}),
	new CopyPlugin({
		patterns: [
			{ from: `${PATHS.src}/images`, to: `${PATHS.static}/images` },
			// { from: `${PATHS.src}/fonts`, to: `${PATHS.static}/fonts` }
		]
	})
]

// todo можно ли сделать так, что бы в зависимости от команды менялись некоторые места в коде.
// что бы я мог подменять пути
module.exports = {
	externals: {
		paths: PATHS
	},
	entry: {
		build: `${PATHS.src}/index.js`,
		// module: `${PATHS.src}/your-module.js`,
	},
	output: {
		filename: `${PATHS.static}js/[name].js`,
		path: PATHS.dist,
		publicPath: '/', //"/" что бы появилась косая на выходе в index.html
		clean: true
	},
	resolve: {
		alias: {
			'~': path.resolve(__dirname, 'src/js'),
			'~c': path.resolve(__dirname, 'src/js/components'),
			'~p': path.resolve(__dirname, 'src/js/containers'),
			'~s': path.resolve(__dirname, 'src/js/store')
		}
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					name: `chunk-vendors`,
					test: /[\\/]node_modules[\\/]/,
					priority: -10,
					chunks: 'initial',
					reuseExistingChunk: true,
				},
				common: {
					name: `chunk-common`,
					minChunks: 2,
					priority: -20,
					chunks: 'initial',
					reuseExistingChunk: true
				}
			}
		}
	},
	plugins,
	module: {
		rules: [
			// /\.jsx?$/
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: [
							"@babel/plugin-transform-react-jsx",
							["@babel/plugin-proposal-decorators", { legacy: true }],
							["@babel/plugin-transform-runtime"],
						],
					}
				}
			},
			// /\.s[ac]ss$/i
			{
				// todo: тут скорее всего сурсмапа нужна только здесь. И вообще, сурсмапа нужна там, какой файл мы отлавливаем, т.е. для css 
				// только в css лоадере она нужна скорее всего. upd нужна ли она везде или нет или где?
				test: /\.s[ac]ss$/i,
				exclude: /node_modules/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							importLoaders: 1,
							modules: {
								localIdentName: '[name]__[local]_[sha1:hash:hex:6]'
							}
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							postcssOptions: {
								config: path.resolve(__dirname, "../postcss.config.js")
							}
						}
					},
					{
						loader: 'sass-loader',
						options: { sourceMap: true }
					}
				]
			},
			{
				test: /\.module\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							importLoaders: 1,
							modules: {
								localIdentName: '[name]__[local]_[sha1:hash:hex:6]'
							}
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							postcssOptions: {
								config: path.resolve(__dirname, "../postcss.config.js")
							}
						}
					}
				]
			},
			// берет обычный css не модульный, т.е. библиотечный 
			{
				test: /^((?!\.module).)*css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							postcssOptions: {
								config: path.resolve(__dirname, "../postcss.config.js")
							}
						}
					}
				]
			},
			// По идее я не буду импортить шрифт на прямую в js.
			// {
			// 	test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
			// 	type: 'asset/resource',
			// 	generator: {
			// 		filename: `${PATHS.static}/images/[base]__[hash:16]`
			// 	}
			// },
			{
				test: /\.(png|jpg|gif|webp)$/,
				type: 'asset/resource',
				generator: {
					filename: `${PATHS.static}/images/[base]__[hash:16]`
				}
			},
			{
				test: /\.svg$/,
				type: 'asset/inline',
				generator: {
					filename: `${PATHS.static}/images/[base]__[hash:16]`
				}
			},
		]
	},
}