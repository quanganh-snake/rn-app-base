module.exports = {
	root: true,
	extends: [
		'@react-native',
		'@react-native-community',
		'plugin:react/recommended',
		'plugin:react-native/all',
		'prettier',
	],
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': ['error', {semi: false}],
		'react-native/no-inline-styles': 0,
	},
	ignorePatterns: ['node_modules/', 'build/', 'dist/'],
}
