modules.exports = {
    extends: 'airbnb',
    env: {
        es6: true,
        browser: true,
        node: true
    },
    rules: {
        indent: [
            2,
            4,
            {
                'SwitchCase': 1,
                'VariableDeclarator': 1,
                'outerIIFEBody': 1
            }
        ],
        'react/jsx-indent': [0],
        'react/jsx-indent-props': [0],
        'max-len': [1, 120],
        'comma-dangle': 1,
        'no-param-reassign': 1,
        'no-console': [
            1,
            { 'allow': ['warn', 'error'] }
        ],
        'react/no-deprecated': 1,
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['to'],
                aspects: ['noHref', 'invalidHref', 'preferButton']
            }
        ],
        'linebreak-style': 0,
        'no-plusplus': [
            'error',
            { 'allowForLoopAfterthoughts': true }
        ],
        'radix': ['error', 'as-needed'],
        'react/jsx-max-props-per-line': [
            'error',
            { 'maximum': 2, 'when': 'multiline' }
        ],
        'react/jsx-first-prop-new-line': 0
    },
    settings: {
        react: {
            version: '16.4',
            flowVersion: '0.73.0'
        }
    }
};
