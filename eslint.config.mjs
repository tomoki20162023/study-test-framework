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
		name: "default",
		files: [ "**/*.js" ],
		languageOptions: {
			sourceType: "script"
		},
		rules: {
			semi: "error"
		}
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
];
