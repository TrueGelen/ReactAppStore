module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"plugin:@typescript-eslint/recommended",
		'plugin:react/recommended',
		"plugin:react-hooks/recommended",
		"plugin:import/recommended",
		"plugin:import/typescript",
		"plugin:import/errors",
		"plugin: import/warnings",
		"plugin:prettier/recommended",
		"prettier",
		"prettier/react",
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		tsconfigRootDir: __dirname,
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: [
		'react',
		'@typescript-eslint',
		'prettier',
	],
	rules: {
		"require-jsdoc": "off",
	}
};
