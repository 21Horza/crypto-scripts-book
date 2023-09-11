module.exports = {
    ignorePatterns: [".eslintrc.cjs", "vite.config.ts"],
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "max-len": ["error", { ignoreComments: true, code: 120 }],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/semi": "off",
        "@typescript-eslint/comma-dangle": "off",
        "react/display-name": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/member-delimiter-style": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-props-no-spreading": "warn",
        "no-shadow": "off",
        "import/extentions": "off",
    }
}
