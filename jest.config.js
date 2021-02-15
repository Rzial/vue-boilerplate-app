const { jsWithBabel: preset } = require('ts-jest/presets');
const { pathsToModuleNameMapper } = require('ts-jest/utils');

const { compilerOptions } = require('./tsconfig.test.json');

module.exports = {
    clearMocks: true,

    collectCoverage: true,
    collectCoverageFrom: ['**/src/**/*.{[tj]s?(x),vue}'],

    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: ['/node_modules/', '<rootDir>/src/main.js'],

    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },

    moduleFileExtensions: ['tsx', 'ts', 'js', 'jsx', 'json', 'vue'],
    moduleNameMapper: {
        '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$':
            '<rootDir>/test/__mocks__/file.js',

        'vuex-router-sync':
            '<rootDir>/node_modules/vuex-router-sync/dist/vuex-router-sync.cjs.js',

        ...pathsToModuleNameMapper(compilerOptions.paths, {
            prefix: '<rootDir>/',
        }),
    },

    snapshotSerializers: ['jest-serializer-vue'],

    testMatch: ['**/test/**/?(*.)+(spec|test).[tj]s?(x)'],

    transform: {
        ...preset.transform,
        '^.+\\.(vue)$': 'vue-jest',
    },
    globals: {
        'ts-jest': {
            tsconfig: {
                lib: ['ES2019', 'DOM'],
                target: 'ES2019',
                module: 'commonjs',
            },
        },
        'vue-jest': {
            pug: {
                doctype: 'html',
            },
        },
    },
};
