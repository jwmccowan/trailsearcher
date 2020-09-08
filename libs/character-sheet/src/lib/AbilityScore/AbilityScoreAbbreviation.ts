import { AbilityScore, AbilityScoreStat } from './AbilityScore';

/**
 * Returns the abbreviation for an ability scofe given an id of an ability score
 * @param name The id of an ability score
 */
export const getAbilityScoreAbbr = (name: AbilityScore) => name.slice(0, 3).toUpperCase();

/**
 * Returns the abbreviation for an ability score given an initialized ability score
 * @param param0 An initialized ability score
 */
export const getAbilityScoreAbbrFromScore = ({ ability }: AbilityScoreStat) => getAbilityScoreAbbr(ability);
