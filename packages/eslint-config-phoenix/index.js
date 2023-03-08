// module.exports = {
//   extends: ["next", "turbo", "airbnb", "prettier"],
//   rules: {
//     "@next/next/no-html-link-for-pages": "off",
//     "import/extensions": "off",
//     "react/jsx-filename-extension": "off",
//     "react/react-in-jsx-scope": "off",
//     "no-shadow": "off",
//     "class-methods-use-this": "off",
//     "react/jsx-props-no-spreading": "off",
//     "no-unused-vars": "off",
//     "react/require-default-props": "off"
//   },
// };
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "next/core-web-vitals",
    "airbnb",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }],
    "react/react-in-jsx-scope": "off",
  },
};
