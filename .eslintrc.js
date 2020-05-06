module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 2018,
    },
    plugins: [
        'sort-keys-custom',
    ],
    rules: {},
    overrides: [
        {
            'files': ['Female3DCG.js'],
            'rules': {
                'sort-keys-custom/sort-keys-custom': ['warn', ['Name', 'Value', 'Difficulty', 'Time'], 'none'],
            },
        },
    ],
};
