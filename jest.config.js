
module.exports = {
    preset: '@lwc/jest-preset',
    moduleNameMapper: {
        '^(c)/(.+)$': '<rootDir>/force-app/main/default/lwc/$2/$2'
    },
    testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/test/specs/'
    ]
};