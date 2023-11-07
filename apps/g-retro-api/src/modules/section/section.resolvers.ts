import type { GQLSectionResolvers, GQLQueryResolvers } from '@gql-types';

export const Section: GQLSectionResolvers = {
  id: () => {
    return '1';
  },
  name: () => {
    return 'Section 1';
  },
};

export const Query: GQLQueryResolvers = {
  section: () => {
    return {
      id: '1',
      name: 'Section 1',
    };
  },
};
