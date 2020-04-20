module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    extends: [
      "plugin:@typescript-eslint/recommended" // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    ],
    rules: {
       "semi": ["error"],
       "quotes": [2, "single"],
       "@typescript-eslint/explicit-function-return-type": "off",
       "@typescript-eslint/no-unused-vars": "off"
      // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
      // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    }
  };