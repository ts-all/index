/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 * https://kulshekhar.github.io/ts-jest/docs/getting-started/presets#createjswithtsesmpresetoptions
 */

import type { Config } from 'jest';

const config: Config = {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'dist/coverage',
    coverageProvider: 'v8',
    extensionsToTreatAsEsm: ['.ts'],
    testMatch: [
        '**/*.test.ts',
    ],
    transform: {
        '^.+\\.ts?$': [
            'ts-jest',
            {
                tsconfig: 'tsconfig.test.json',
                // eslint-disable-next-line @typescript-eslint/naming-convention
                useESM: true,
            },
        ],
    },
};

export default config;
