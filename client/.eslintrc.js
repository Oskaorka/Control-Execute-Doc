module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "standard"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        indent: [0, 4],
        semi: [2, "always"],
        "space-before-function-paren": [
            "error",
            {
                anonymous: "always",
                named: "never"
            }
        ],
        "multiline-ternary": ["off", "always-multiline"],
        // "multiline-ternary": ["error", "never"],
        quotes: ["error", "double", { allowTemplateLiterals: true }]
    }
};
