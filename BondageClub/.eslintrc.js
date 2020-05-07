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
            files: ['Female3DCG.js'],
            rules: {
                'sort-keys-custom/sort-keys-custom': [
                    'warn', [
                        'Name',
                        'Group',
                        'Priority',
                        'Value',
                        'Difficulty',
                        'SelfBondage',
                        'Time',
                        'RemoveTime',
                        'Enable',
                        'Visible',
                        'Random',
                        'Wear',
                        'IsRestraint',
                        'AllowLock',
                        'OwnerOnly',
                        'LoverOnly',
                        'Left',
                        'Top',
                        'DefaultColor',
                        'BuyGroup',
                        'Prerequisite',
                        'Hide',
                        'HideItem',
                    ], 'none',
                ],
            },
        },
    ],
};
