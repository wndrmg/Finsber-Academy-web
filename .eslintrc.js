module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2021,
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    globals: {
        chrome: true,
    },
    settings: {
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                project: 'tsconfig.json',
            },
        },
    },
    plugins: ['@typescript-eslint', 'simple-import-sort', 'import'],
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        // 'plugin:prettier/recommended',
        //imports
        // "plugin:import/typescript",
        // "plugin:import/errors",
        // "plugin:import/warnings"
    ],

    rules: {
        'max-len': [
            'error',
            {
                code: 150,
                ignoreUrls: true,
            },
        ],
        quotes: ['error', 'single'],
        '@typescript-eslint/quotes': [
            'error',
            'single',
            {
                allowTemplateLiterals: true,
            },
        ],
        'import/prefer-default-export': 'off',
        'prefer-destructuring': 'off',
        //imports
        'simple-import-sort/exports': 'error',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
        //react
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
        'import/order': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'react/jsx-props-no-spreading': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        'no-plusplus': 'off',
        '@typescript-eslint/no-shadow': 'off',
        'import/no-extraneous-dependencies': 'off',
        '@typescript-eslint/no-unused-expressions': 'off',
        'no-param-reassign': 'off',
        'prefer-promise-reject-errors': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/indent': ["error", 4],
        'object-curly-spacing': 'off'
    },
};
