module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb-base",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        'indent': ['warn', 2],
        'quotes': ['warn', 'single'],
        'no-console': 'off', // Severity should be one of the following: 0 = off, 1 = warn, 2 = error
        'eol-last': 'off',
        'linebreak-style': [0, 'error', 'windows']
    },
    settings: {
        'import/resolver': {
            node: {
                moduleDirectory: [
                    'node_modules',
                    'vendor',
                    'dist',
                ],
            },
        },
    },
};