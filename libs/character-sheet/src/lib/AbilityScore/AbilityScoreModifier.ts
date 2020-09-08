import { AbilityScores, AbilityScoreStat } from './AbilityScore';

/**
 * Returns the ability score modifier given a raw ability score number
 * @param score A raw ability score value
 */
export const calculateAbilityModifier = (score: number) => Math.floor((score - 10) / 2);

/**
 * Returns the ability score modifier given an initialized ability score
 * @param param0 An initialized ability score
 */
export const calculateAbilityModifierFromScore = ({ score }: AbilityScoreStat) => calculateAbilityModifier(score);

/**
 * Returns the ability score modifier given an id of an ability score and a set of initialized ability scores
 * @param ability An id of an ability score
 * @param scores An initialized set of ability scores
 */
export const calculateAbilityModifierFromScores = (ability: keyof AbilityScores, scores: AbilityScores) =>
  calculateAbilityModifierFromScore(scores[ability]);
