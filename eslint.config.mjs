import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import eslintPluginImport from "eslint-plugin-import";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: {
      js,
      import: eslintPluginImport,
    },
    extends: ["js/recommended"],
    rules: {
      // 🧹 Classement des imports
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: { order: "asc", caseInsensitive: true },
          "newlines-between": "always",
        },
      ],

      // ⚠️ Avertir sur console.log
      "no-restricted-syntax": [
        "error",
        {
          selector:
            'CallExpression[callee.object.name="console"][callee.property.name="log"]',
          message:
            "Using console.log is discouraged. Please remove it before committing.",
        },
      ],

      // ✅ Remplace no-unused-vars par la version TS
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: { globals: globals.node },
  },
  tseslint.configs.recommended,
]);
