module.exports = {
  ignorePatterns: ['node_modules', 'dist'],
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'eslint-config-turbo'],
  rules: {
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      plugins: ['@typescript-eslint', 'import'],
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/recommended', 'plugin:import/typescript'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2022,
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
      rules: {
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'variable',
            modifiers: ['exported'],
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          },
          {
            selector: 'variable',
            modifiers: ['const'],
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          },
          {
            selector: 'variable',
            format: ['camelCase'],
          },
          {
            selector: ['typeLike'],
            format: ['PascalCase'],
          },
          {
            selector: 'enum',
            format: ['UPPER_CASE'],
          },
        ],
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
            ignoreRestSiblings: true,
          },
        ],
        'import/exports-last': 'error',
        'import/newline-after-import': 'error',
        'import/no-default-export': 'off',
        'import/no-deprecated': 'warn',
        'import/no-duplicates': 'error',
        'import/no-extraneous-dependencies': 'error',
        'import/prefer-default-export': 'off',
        'import/order': [
          'error',
          {
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
            },
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
          },
        ],
      },
    },
  ],
};
