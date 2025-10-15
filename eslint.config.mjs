/**
 * THIS FILE WAS AUTO-GENERATED.
 * PLEASE DO NOT EDIT IT MANUALLY.
 * ===============================
 * IF YOU'RE COPYING THIS INTO AN ESLINT CONFIG, REMOVE THIS COMMENT BLOCK.
 */

import path from "node:path";

import { includeIgnoreFile } from "@eslint/compat";
import js from "@eslint/js";
import { configs } from "eslint-config-airbnb-extended/legacy";
import { rules as prettierConfigRules } from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

const gitignorePath = path.resolve(".", ".gitignore");
const tsconfigPath = path.resolve('.', 'tsconfig.eslint.json');

const jsConfig = [
	// ESLint Recommended Rules
	{
		name: "js/config",
		...js.configs.recommended,
	},
	// Airbnb Base Recommended Config
	...configs.base.recommended,
];

const typescriptConfig = [
	// Airbnb Base TypeScript Config
	...configs.base.typescript,
	{
    languageOptions: {
      parserOptions: {
        project: tsconfigPath,
        tsconfigRootDir: path.resolve("."),
      },
    },
    rules: {
      "import/prefer-default-export": "off",
    },
  },
];

const prettierConfig = [
	// Prettier Plugin
	{
		name: "prettier/plugin/config",
		plugins: {
			prettier: prettierPlugin,
		},
	},
	// Prettier Config
	{
		name: "prettier/config",
		rules: {
			...prettierConfigRules,
			"prettier/prettier": "error",
			"no-console": "off",
		},
	},
];

const testConfig = [
  {
    files: ["**/*.spec.ts", "**/*.test.ts"],
    rules: {
      "import/no-extraneous-dependencies": [
        "error",
        { devDependencies: true }
      ],
    },
  },
];

export default [
	includeIgnoreFile(gitignorePath),
	{
		ignores: ["tsup.config.ts", "commitlint.config.ts",  "vitest.config.ts", "eslint.config.mjs"],
	},
	// Javascript Config
	...jsConfig,
	...testConfig
	// TypeScript Config
	...typescriptConfig,
	// Prettier Config
	...prettierConfig,

];
