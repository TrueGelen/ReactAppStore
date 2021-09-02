const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
	plugins: [
		postcssPresetEnv(/* pluginOptions */),
		// require('css-mqpacker'),
		// css-mqpacker is deprecated, альтернатива ниже, но автор пишет, что группировка
		// это побочный эффект, а не цель. Поэтому в коментах мы все равно css-mqpacker оставляем,
		// но так же надо посмотреть на разницу результатов
		require('postcss-sort-media-queries')({
			sort: 'desktop-first'
		}),
		require('cssnano')({
			preset: 'default',
		}),
	]
}
