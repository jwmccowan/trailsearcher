import { AbilityScore } from '../AbilityScore';

export enum PCClass {
  fighter = 'fighter',
  wizard = 'wizard',
  rogue = 'rogue',
}

const PCClassData: Record<PCClass, PCClassDatum> = Object.freeze({
  fighter: {
    name: 'Fighter',
    class: PCClass.fighter,
    keyAbilityScores: [AbilityScore.strength, AbilityScore.dexterity],
  },
  wizard: {
    name: 'Wizard',
    class: PCClass.wizard,
    keyAbilityScores: [AbilityScore.intelligence],
  },
  rogue: {
    name: 'Rogue',
    class: PCClass.rogue,
    keyAbilityScores: [AbilityScore.dexterity],
  },
});

export type PCClassDatum = {
  name: string;
  class: PCClass;
  keyAbilityScores: AbilityScore[];
};

export const getPCClass = (pcClass: PCClass) => PCClassData[pcClass];

export const getPCClassList = (): PCClassDatum[] => Object.keys(PCClass).map(getPCClass);
