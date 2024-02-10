import DataLoader from 'dataloader';
import { type EntityManager, In } from 'typeorm';

import { SectionEntity } from '../../entity';

export class SectionService {
  private sectionByIdLoader: DataLoader<string, SectionEntity | null, string>;
  private sectionByNameLoader: DataLoader<string, SectionEntity | null, string>;

  constructor(private entityManager: EntityManager) {
    this.sectionByIdLoader = new DataLoader(async (idList: readonly string[]) => {
      const sections = await this.entityManager.find(SectionEntity, {
        where: {
          id: In(idList),
        },
      });

      const sectionsMap = sections.reduce<Record<string, SectionEntity>>((map, section) => {
        map[section.id] = section;

        return map;
      }, {});

      return idList.map(id => {
        const section = sectionsMap[id];

        if (section instanceof SectionEntity) {
          this.sectionByNameLoader.prime(section.name, section);
        }

        return section ? section : null;
      });
    });

    this.sectionByNameLoader = new DataLoader(async (nameList: readonly string[]) => {
      const sections = await this.entityManager.find(SectionEntity, {
        where: {
          name: In(nameList),
        },
      });

      const sectionsMap = sections.reduce<Record<string, SectionEntity>>((map, section) => {
        map[section.name] = section;

        return map;
      }, {});

      return nameList.map(id => {
        const section = sectionsMap[id];

        if (section instanceof SectionEntity) {
          this.sectionByIdLoader.prime(section.id, section);
        }

        return section ? section : null;
      });
    });
  }

  public async getSectionById(sectionId: string): Promise<SectionEntity | Error> {
    const section = await this.sectionByIdLoader.load(sectionId);

    return section ? section : new Error(`Section with id: ${sectionId} not found.`);
  }

  public async getSectionByName(sectionName: string): Promise<SectionEntity | Error> {
    const section = await this.sectionByNameLoader.load(sectionName);

    return section ? section : new Error(`Section with name: ${sectionName} not found.`);
  }
}
