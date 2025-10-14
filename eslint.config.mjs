import { default as config } from '@ts-all/eslint-config';

export default [...config, {
    name: '@ts-all/eslint-config',
    languageOptions: {
        parserOptions: {
            project: './tsconfig.lint.json',
            projectService: false,
            tsconfigRootDir: import.meta.dirname,
        },
    },
}];
