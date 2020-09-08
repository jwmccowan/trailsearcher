import { Skill } from './Skills';
import { CharacterSheet } from '../CharacterSheet';
import { getProficiencyStatValue } from '../ProficiencyStat';

export const getSkillValue = (skill: Skill, characterSheet: CharacterSheet) =>
  getProficiencyStatValue(characterSheet.skills[skill], characterSheet);
