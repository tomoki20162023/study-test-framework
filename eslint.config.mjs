import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		ignores: [
			"**/libs/",
			"**/node_modules/"
		]
	},
	{
		languageOptions: {
			globals: {
				...globals.browser,
				"$": true
			}
		}
	},
	pluginJs.configs.recommended,
	{
		name: "custom",
		files: [ "**/*.js" ],
		languageOptions: {
			sourceType: "script"
		},
		rules: {
			"no-undef": "warn",
			"no-unused-vars": "warn",
		}
	},
];
