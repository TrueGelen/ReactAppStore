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
		"plugin:import/warnings",
		"prettier",
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
		'react-hooks',
	],
	settings: {
		react: {
			version: "detect",
		},
	},
	rules: {
		"@typescript-eslint/ban-ts-comment": 0,
		"no-console": 2,
		"react/sort-comp": [
			1,
			{
				order: [
					"static-variables",
					"static-methods",
					"instance-variables",
					"lifecycle",
					"instance-variables",
					"selectors",
					"everything-else",
					"rendering",
				],
				groups: {
					lifecycle: [
						"displayName",
						"propTypes",
						"contextTypes",
						"childContextTypes",
						"mixins",
						"statics",
						"defaultProps",
						"constructor",
						"getDefaultProps",
						"state",
						"getInitialState",
						"getChildContext",
						"getDerivedStateFromProps",
						"componentWillMount",
						"UNSAFE_componentWillMount",
						"componentDidMount",
						"componentWillReceiveProps",
						"UNSAFE_componentWillReceiveProps",
						"shouldComponentUpdate",
						"componentWillUpdate",
						"UNSAFE_componentWillUpdate",
						"getSnapshotBeforeUpdate",
						"componentDidUpdate",
						"componentDidCatch",
						"componentWillUnmount",
					],
					rendering: ["/^render.+$/", "render"],
				},
			},
		],
		"no-template-curly-in-string": "error",
		"curly": 2
	},
	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			rules: {
				"@typescript-eslint/no-empty-interface": [
					0,
					{
						allowSingleExtends: true,
					},
				],
				"@typescript-eslint/no-unused-vars": [
					2,
					{
						vars: "all",
						args: "after-used",
						argsIgnorePattern: "^_",
						ignoreRestSiblings: true,
					},
				],
				"@typescript-eslint/no-inferrable-types": 0,
				// ------React Rules------//
				"react/display-name": "off",
				"react/prop-types": "off",
			},
		}
	]
};

