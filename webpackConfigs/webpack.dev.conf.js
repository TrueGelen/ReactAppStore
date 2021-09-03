const webpack = require('webpack')
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = merge(baseWebpackConfig, {
	// DEV config
	mode: 'development',
	devtool: 'cheap-module-source-map',
	devServer: {
		client: {
			overlay: true,
			// progress: true,
		},
		historyApiFallback: true,
		liveReload: false,
		static: baseWebpackConfig.externals.paths.dist,
		port: 8080,
	},
	plugins: [
		// new webpack.SourceMapDevToolPlugin({
		// 	filename: '[file].map'
		// }),
		new webpack.HotModuleReplacementPlugin()
	]
});

module.exports = new Promise((resolve, reject) => {
	resolve(devWebpackConfig)
})
