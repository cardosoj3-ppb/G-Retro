import type { GQLSectionResolvers, GQLQueryResolvers } from '@gql-types';

export const Section: GQLSectionResolvers = {
  id: async ({ id }, _, { sectionService }) => {
    const section = await sectionService.getSectionById(id);

    if (section instanceof Error) {
      throw section;
    }

    return section.id;
  },
  name: async ({ id }, _, { sectionService }) => {
    const section = await sectionService.getSectionById(id);

    if (section instanceof Error) {
      throw section;
    }

    return section.name;
  },
};

export const Query: GQLQueryResolvers = {
  sectionById: async (_, { id }) => {
    return {
      id: id,
    };
  },
  sectionByName: async (_, { name }, { sectionService }) => {
    const section = await sectionService.getSectionByName(name);

    if (section instanceof Error) {
      throw section;
    }

    return {
      id: section.id,
    };
  },
};
