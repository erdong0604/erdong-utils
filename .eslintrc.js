module.exports = {
	env: {
		browser: true,
		node: true,
	},
	extends: "eslint:recommended",
	parserOptions: {
		ecmaVersion: 12,
		sourceType: "module",
		parser: 'babel-eslint'
	},
	rules: {
		indent: ["error", "tab"],
	},
};
