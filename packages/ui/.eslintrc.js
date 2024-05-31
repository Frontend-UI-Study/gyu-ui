/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['@repo/eslint-config/react.js'],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "import/no-cycle": "off",
    "unicorn/filename-case": "off",
  }
};
