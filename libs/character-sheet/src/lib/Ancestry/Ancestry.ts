import { AbilityScore } from '../AbilityScore';

export enum Ancestry {
  elf = 'elf',
  human = 'human',
  goblin = 'goblin',
}

export type AncestryDatum = {
  ancestry: Ancestry;
  name: string;
  abilityScoreModifiers: AbilityScore[];
};

const ancestryData: Record<Ancestry, AncestryDatum> = {
  elf: {
    ancestry: Ancestry.elf,
    name: 'Elf',
    abilityScoreModifiers: [AbilityScore.dexterity, AbilityScore.intelligence],
  },
  human: {
    ancestry: Ancestry.human,
    name: 'Human',
    abilityScoreModifiers: [AbilityScore.strength, AbilityScore.wisdom],
  },
  goblin: {
    ancestry: Ancestry.goblin,
    name: 'Goblin',
    abilityScoreModifiers: [AbilityScore.dexterity, AbilityScore.charisma],
  },
};

export const getAncestry = (ancestry: Ancestry): AncestryDatum => ancestryData[ancestry];

export const getAncestryList = (): AncestryDatum[] => Object.keys(Ancestry).map(getAncestry);
