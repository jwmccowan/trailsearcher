import { ProficiencyStat } from '../ProficiencyStat';
import { Proficiency } from '../Proficiency';
import { AbilityScore } from '../AbilityScore';

export enum SavingThrow {
  reflex = 'reflex',
  fortitude = 'fortitude',
  will = 'will',
}

export const SavingThrowData: Record<SavingThrow, SavingThrowDatum> = Object.freeze({
  reflex: {
    name: 'reflex',
    keyAbilityScore: AbilityScore.dexterity,
  },
  fortitude: {
    name: 'fortitude',
    keyAbilityScore: AbilityScore.constitution,
  },
  will: {
    name: 'will',
    keyAbilityScore: AbilityScore.wisdom,
  },
});

export type SavingThrowDatum = {
  name: string;
  keyAbilityScore: AbilityScore;
};

export type SavingThrowStat = ProficiencyStat & {
  name: SavingThrow;
};

export type SavingThrows = Record<SavingThrow, SavingThrowStat>;

export const initSavingThrows = (initialThrows?: Partial<Record<SavingThrow, Proficiency>>): SavingThrows => {
  const sThrows: Partial<SavingThrows> = {};
  for (const sThrow in SavingThrowData) {
    const { name, keyAbilityScore } = SavingThrowData[sThrow];
    sThrows[sThrow] = {
      bonuses: [],
      name,
      keyAbilityScore,
      proficiency: initialThrows && initialThrows[sThrow] ? initialThrows[sThrow] : Proficiency.untrained,
    };
  }
  return sThrows as SavingThrows;
};
