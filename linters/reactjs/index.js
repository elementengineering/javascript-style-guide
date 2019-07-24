module.exports = {
    extends: require.resolve('eslint-config-airbnb'),
    env: {
        es6: true,
        browser: true,
        node: true
    },
    rules: {
        'comma-dangle': 1,
        indent: [
            2,
            4,
            {
                'SwitchCase': 1,
                'VariableDeclarator': 1,
                'outerIIFEBody': 1
            }
        ],
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                aspects: ['noHref', 'invalidHref', 'preferButton'],
                components: ['Link'],
                specialLink: ['to']
            }
        ],
        'linebreak-style': 0,
        'max-len': [1, 120],
        'no-console': [
            1,
            { 'allow': ['error', 'warn'] }
        ],
        'no-param-reassign': 1,
        'no-plusplus': [
            'error',
            { 'allowForLoopAfterthoughts': true }
        ],
        'radix': ['error', 'as-needed'],
        'react/jsx-first-prop-new-line': 0,
        'react/jsx-indent': [0],
        'react/jsx-indent-props': [0],
        'react/jsx-max-props-per-line': [
            'error',
            { 'maximum': 2, 'when': 'multiline' }
        ],
        'react/no-deprecated': 1,
        'sort-keys': [
            "error",
            "asc",
            {
                "caseSensitive": false
            }
        ],
        'sort-imports': [
            "error",
            {
                "ignoreCase": true,
                "ignoreDeclarationSort": true
            }
        ]
    },
    settings: {
        react: {
            version: '16.4',
            flowVersion: '0.73.0'
        }
    }
};
