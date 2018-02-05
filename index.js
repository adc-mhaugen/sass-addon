/* eslint-env node */
'use strict';

module.exports = {
    name: 'sass-addon',
    postcssOptions: {
        compile: {
            extension: 'scss',
            enabled: true,
            parser: require('postcss-scss'),
            plugins: [
                {
                    module: require('@csstools/postcss-sass')
                }
            ]
        },
        filter: {
            enabled: false
        }
    }

};
