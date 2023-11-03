module.exports = {
  root: true,
  extends: ['@g-retro/eslint-config-custom/base.js'],
  overrides: [
    {
      files: ['*.graphql'],
      plugins: ['@graphql-eslint'],
      extends: ['plugin:@graphql-eslint/schema-recommended'],
      parser: '@graphql-eslint/eslint-plugin',
      parserOptions: {
        schema: './src/**/*.graphql',
      },
      rules: {
        '@graphql-eslint/relay-arguments': 'off',
        '@graphql-eslint/description-style': [
          'error',
          {
            style: 'block',
          },
        ],
        '@graphql-eslint/match-document-filename': [
          'error',
          {
            fileExtension: '.graphql',
            query: 'kebab-case',
          },
        ],
        '@graphql-eslint/require-description': [
          'error',
          {
            types: true,
            rootField: true,
            FieldDefinition: true,
            DirectiveDefinition: true,
          },
        ],
        '@graphql-eslint/strict-id-in-types': [
          'error',
          {
            acceptedIdTypes: ['ID'],
            exceptions: {
              types: ['PageInfo'],
              suffixes: ['Connection', 'Edge'],
            },
          },
        ],
      },
    },
  ],
};
