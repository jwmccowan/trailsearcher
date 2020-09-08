import { AbilityScore } from '../AbilityScore';
import { Feature } from '../Feature';

export enum CharacterClass {
  fighter = 'fighter',
  wizard = 'wizard',
  rogue = 'rogue',
}

const CharacterClassData: Record<CharacterClass, CharacterClassFeature> = Object.freeze({
  fighter: {
    displayName: 'Fighter',
    key: CharacterClass.fighter,
    keyAbilityScores: [AbilityScore.strength, AbilityScore.dexterity],
  },
  wizard: {
    displayName: 'Wizard',
    key: CharacterClass.wizard,
    keyAbilityScores: [AbilityScore.intelligence],
  },
  rogue: {
    displayName: 'Rogue',
    key: CharacterClass.rogue,
    keyAbilityScores: [AbilityScore.dexterity],
  },
});

export type CharacterClassFeature = Feature<CharacterClass> & {
  keyAbilityScores: AbilityScore[];
};

export const getCharacterClass = (pcClass: CharacterClass) => CharacterClassData[pcClass];

export const getCharacterClassList = (): CharacterClassFeature[] => Object.keys(CharacterClass).map(getCharacterClass);
