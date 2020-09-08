export enum Proficiency {
  untrained = 0,
  trained = 2,
  expert = 4,
  master = 6,
  legendary = 8,
}

/**
 * Returns how much of the level should be added based on proficiency
 * Right now it seems simple, but it will be good to have this separated when we add exceptions.
 * The human feat that adds half your level if untrained comes to mind.
 * @param proficiency Proficiency of skill
 * @param level Current level of character
 */
export const getLevelValueForProficiency = (proficiency: Proficiency, level: number) => {
  if (proficiency === Proficiency.untrained) {
    return 0;
  }
  return level;
};

/**
 * Returns proficiency value without adding level
 * @param proficiency Proficiency of skill
 */
export const getProficiencyValueWithoutLevel = (proficiency: Proficiency) => proficiency.valueOf();

/**
 * Returns the total proficiency value including level
 * @param proficiency Proficiency of skill
 * @param level Current level of character
 */
export const getProficiencyValue = (proficiency: Proficiency, level: number) =>
  getLevelValueForProficiency(proficiency, level) + getProficiencyValueWithoutLevel(proficiency);
