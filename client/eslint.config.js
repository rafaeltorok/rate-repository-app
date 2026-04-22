// JavaScript
import js from "@eslint/js";

// Plugins
import reactPlugin from "eslint-plugin-react";
import reactNativePlugin from "eslint-plugin-react-native";
import pluginJest from "eslint-plugin-jest";

// Babel
import babelParser from "@babel/eslint-parser";

// Configuration
export default [
  js.configs.recommended,
  reactPlugin.configs.flat.recommended,

  // Jest config – applies only to test files
  {
    files: ["**/*.spec.js", "**/*.test.js"],
    ...pluginJest.configs["flat/recommended"],
  },

  // React/React Native config – applies to all JS/JSX files
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...reactNativePlugin.environments["react-native"].globals,
        ...pluginJest.environments.globals.globals,
      },
    },
    plugins: {
      react: reactPlugin,
      "react-native": reactNativePlugin,
      jest: pluginJest, // still needed for Jest globals/rules in these files
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
];
