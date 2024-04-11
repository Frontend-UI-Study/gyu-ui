module.exports = [
  'error',
  {
    groups: [['builtin'], ['external'], ['internal'], ['parent'], ['sibling'], ['type']],
    'newlines-between': 'always',
    pathGroups: [
      {
        pattern: '@repo/**',
        group: 'external',
        position: 'after',
      },
    ],
    alphabetize: {
      order: 'desc',
    },
    pathGroupsExcludedImportTypes: ['@repo'],
  },
];
