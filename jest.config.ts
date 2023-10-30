export default {
    transform: { '\\.[jt]sx?$': ['ts-jest', { useESM: true }] },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'babel',
    testMatch: ['**/tests/unit/*/*.test.ts'],
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',
    },
};
