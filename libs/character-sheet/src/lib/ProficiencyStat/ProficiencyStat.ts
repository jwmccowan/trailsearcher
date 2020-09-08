import { Proficiency } from '../Proficiency';
import { AbilityScore, calculateAbilityModifierFromScores } from '../AbilityScore';
import { getProficiencyValue } from '../Proficiency/Proficiency';
import { CharacterSheet } from '../CharacterSheet';
import { Bonus, getBonus } from '../Bonus';

export type ProficiencyStat = {
  keyAbilityScore: AbilityScore;
  proficiency: Proficiency;
  bonuses: Bonus[];
};

export const getProficiencyStatValue = (
  { bonuses, keyAbilityScore, proficiency }: ProficiencyStat,
  { baseAbilityScores, level }: CharacterSheet
) => {
  return (
    getProficiencyValue(proficiency, level) +
    calculateAbilityModifierFromScores(keyAbilityScore, baseAbilityScores) +
    getBonus(bonuses)
  );
};

// export const initProficiencyStats = <T extends typeof E>(keyAbilityScores: Record<T[keyof T], AbilityScoreName>) => {
//   const stats: Partial<ProficiencyStatBucket<T>> = {};
//   for (const stat in keyAbilityScores) {
//     stats[stat] = {
//       name: stat,
//       bonuses: [],
//       keyAbilityScore: keyAbilityScores[stat],
//       proficiency: Proficiency.untrained,
//     };
//   }
//   return stats as ProficiencyStatBucket<T>;
// };
