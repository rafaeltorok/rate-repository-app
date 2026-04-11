import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import reactNativePlugin from "eslint-plugin-react-native";
import babelParser from "@babel/eslint-parser";

export default [
  // Base configs (replaces "extends")
  js.configs.recommended,
  reactPlugin.configs.flat.recommended, // for React 17+ JSX transform
  
  // Main config object
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: "latest",
        sourceType: "module",
      },
      // Replaces "env: { react-native/react-native: true }"
      globals: {
        ...reactNativePlugin.environments["react-native"].globals,
      },
    },
    plugins: {
      react: reactPlugin,
      "react-native": reactNativePlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
];