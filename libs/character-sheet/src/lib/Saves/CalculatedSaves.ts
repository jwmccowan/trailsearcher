import { SavingThrow } from './Saves';
import { CharacterSheet } from '../CharacterSheet';
import { getProficiencyStatValue } from '../ProficiencyStat';

export const getSavingThrowValue = (save: SavingThrow, characterSheet: CharacterSheet) =>
  getProficiencyStatValue(characterSheet.saves[save], characterSheet);
