module.exports = {
    extends: [
        "plugin:angular/johnpapa",
        require.resolve("eslint-config-ionic"),
        require.resolve('eslint-config-airbnb-base')
    ],
    env: {
        es6: true,
        browser: true,
        node: true
    },
    rules: {
        "angular/controller-name": [2,"/[A-Z].*Ctrl/"],
        "angular/controller-as": 1,
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
    globals: {
        "angular": true,
        "cordova": true,
        "device": true,
        "ble": true,
        "FileTransfer": true,
        "FileTransferError": true,
        "zip": true,
        "FirebaseCrashlytics": true
    }
};
