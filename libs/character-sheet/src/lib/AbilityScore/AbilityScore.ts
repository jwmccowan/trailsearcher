/**
 * Enum containing the six ability score names
 */
export enum AbilityScore {
  strength = 'strength',
  dexterity = 'dexterity',
  constitution = 'constitution',
  intelligence = 'intelligence',
  wisdom = 'wisdom',
  charisma = 'charisma',
}

/**
 * AbilityScore - contains the ability score name and a value
 */
export type AbilityScoreStat = {
  score: number;
  ability: AbilityScore;
};

/**
 * AbilityScores - [key: AbilityScoreName]: AbilityScore
 */
export type AbilityScores = Record<AbilityScore, AbilityScoreStat>;

/**
 * Returns an initialized set of ability scores.
 * Initialize all scores to 10 unless override values are provided
 * @param initialScores An optional object with any or all specific ability score values with which to override
 */
export const initAbilityScores = (initialScores?: Partial<Record<AbilityScore, number>>): AbilityScores => {
  const scores: Partial<AbilityScores> = {};
  for (const ability in AbilityScore) {
    scores[ability] = { ability, score: initialScores && initialScores[ability] ? initialScores[ability] : 10 };
  }
  return scores as AbilityScores;
};
