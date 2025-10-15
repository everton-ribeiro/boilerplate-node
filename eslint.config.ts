import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";

import { configs as airbnbConfig } from "eslint-config-airbnb-extended/legacy";
import { rules as prettierConfigRules } from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";

export default defineConfig([
  globalIgnores([
    "node_modules/*",
    "eslint.config.ts",
    "vitest.config.ts",
    "prettier.config.ts",
		"tsup.config.ts",
		"commitlint.config.ts",
     "**/*.spec.ts"
  ]),
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.node
    }
  },
  ...airbnbConfig.base.typescript,
  {
    name: "import/settings",
    settings: {
      "import/resolver": {
        typescript: true,
        node: true,
      },
    },
  },
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    plugins: {
      import: importPlugin,
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'type'],
          pathGroups: [
            {
              group: 'builtin',
              pattern: 'fastify',
              position: 'before',
            },
            {
              pattern: '@/**',
              group: 'internal',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['fastify'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/no-duplicates': 'error',
      "import/first": "error",
      "import/newline-after-import": "error",
    },
  },
  {
    name: "prettier/plugin/config",
    plugins: {
      prettier: prettierPlugin,
    },
  },
  {
    name: "prettier/config",
    rules: {
      ...prettierConfigRules,
      "prettier/prettier": "error",
      "no-console": "off",
    },
  }
]);
