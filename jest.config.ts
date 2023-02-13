import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: 'jest-environment-jsdom',
  transform: { '^.+\\.tsx?$': 'ts-jest' },
  moduleDirectories: ['node_modules'],
  moduleNameMapper: { '^\\$(.*)$': '<rootDir>/src/$1' },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
};

export default config;
