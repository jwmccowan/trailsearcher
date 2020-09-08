import { AbilityScores, initAbilityScores, AbilityScore } from '../AbilityScore';
import { CharacterSkills, initSkills, Skill } from '../Skills';
import { Proficiency } from '../Proficiency';
import { initSavingThrows, SavingThrow, SavingThrows } from '../Saves';
import { CharacterDetails, initCharacterDetails } from '../CharacterDetails';

export type CharacterSheet = {
  baseAbilityScores: AbilityScores;
  level: number;
  saves: SavingThrows;
  skills: CharacterSkills;
  details: CharacterDetails;
};

export type InitialValues = {
  initialLevel?: number;
  initialSaves?: Partial<Record<SavingThrow, Proficiency>>;
  initialScores?: Partial<Record<AbilityScore, number>>;
  initialProficiencies?: Partial<Record<Skill, Proficiency>>;
};

export const initCharacterSheet = ({
  initialLevel,
  initialSaves,
  initialScores,
  initialProficiencies,
}: InitialValues = {}): CharacterSheet => {
  return {
    baseAbilityScores: initAbilityScores(initialScores),
    level: initialLevel ?? 1,
    saves: initSavingThrows(initialSaves),
    skills: initSkills(initialProficiencies),
    details: initCharacterDetails(),
  };
};
