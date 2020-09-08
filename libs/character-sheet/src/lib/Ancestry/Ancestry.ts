import { AbilityScore } from '../AbilityScore';
import { Feature } from '../Feature';

export enum Ancestry {
  elf = 'elf',
  human = 'human',
  goblin = 'goblin',
}

export type AncestryFeature = Feature<Ancestry> & {
  abilityScoreModifiers: AbilityScore[];
};

const ancestryData: Record<Ancestry, AncestryFeature> = {
  elf: {
    key: Ancestry.elf,
    displayName: 'Elf',
    abilityScoreModifiers: [AbilityScore.dexterity, AbilityScore.intelligence],
  },
  human: {
    key: Ancestry.human,
    displayName: 'Human',
    abilityScoreModifiers: [AbilityScore.strength, AbilityScore.wisdom],
  },
  goblin: {
    key: Ancestry.goblin,
    displayName: 'Goblin',
    abilityScoreModifiers: [AbilityScore.dexterity, AbilityScore.charisma],
  },
};

export const getAncestry = (ancestry: Ancestry): AncestryFeature => ancestryData[ancestry];

export const getAncestryList = (): AncestryFeature[] => Object.keys(Ancestry).map(getAncestry);
