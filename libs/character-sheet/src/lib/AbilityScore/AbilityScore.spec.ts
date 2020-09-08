import { AbilityScore, initAbilityScores } from './AbilityScore';
import { getAbilityScoreAbbr, getAbilityScoreAbbrFromScore } from './AbilityScoreAbbreviation';
import {
  calculateAbilityModifier,
  calculateAbilityModifierFromScore,
  calculateAbilityModifierFromScores,
} from './AbilityScoreModifier';

describe('ability scores', () => {
  it('should init a score array', () => {
    const array = initAbilityScores();
    expect(array.strength.score).toBe(10);
    expect(array.dexterity.score).toBe(10);
    expect(array.constitution.score).toBe(10);
    expect(array.intelligence.score).toBe(10);
    expect(array.wisdom.score).toBe(10);
    expect(array.charisma.score).toBe(10);
  });

  it('should return the correct abbreviation for each score', () => {
    const array = initAbilityScores();
    expect(getAbilityScoreAbbrFromScore(array.strength)).toBe('STR');
    expect(getAbilityScoreAbbrFromScore(array.dexterity)).toBe('DEX');
    expect(getAbilityScoreAbbrFromScore(array.constitution)).toBe('CON');
    expect(getAbilityScoreAbbrFromScore(array.intelligence)).toBe('INT');
    expect(getAbilityScoreAbbrFromScore(array.wisdom)).toBe('WIS');
    expect(getAbilityScoreAbbrFromScore(array.charisma)).toBe('CHA');
  });

  it('should return the correct abbreviation', () => {
    expect(getAbilityScoreAbbr(AbilityScore.strength)).toBe('STR');
    expect(getAbilityScoreAbbr(AbilityScore.dexterity)).toBe('DEX');
    expect(getAbilityScoreAbbr(AbilityScore.constitution)).toBe('CON');
    expect(getAbilityScoreAbbr(AbilityScore.intelligence)).toBe('INT');
    expect(getAbilityScoreAbbr(AbilityScore.wisdom)).toBe('WIS');
    expect(getAbilityScoreAbbr(AbilityScore.charisma)).toBe('CHA');
  });

  it('should init a score array with custom values', () => {
    const array = initAbilityScores({ strength: 8, charisma: 12 });
    expect(array.strength.score).toBe(8);
    expect(array.dexterity.score).toBe(10);
    expect(array.constitution.score).toBe(10);
    expect(array.intelligence.score).toBe(10);
    expect(array.wisdom.score).toBe(10);
    expect(array.charisma.score).toBe(12);
  });

  it('should give correct modifiers from AbilityScores object and key', () => {
    const array = initAbilityScores({
      strength: 7,
      dexterity: 8,
      constitution: 9,
      intelligence: 11,
      wisdom: 10,
      charisma: 12,
    });
    expect(calculateAbilityModifierFromScores(AbilityScore.strength, array)).toBe(-2);
    expect(calculateAbilityModifierFromScores(AbilityScore.dexterity, array)).toBe(-1);
    expect(calculateAbilityModifierFromScores(AbilityScore.constitution, array)).toBe(-1);
    expect(calculateAbilityModifierFromScores(AbilityScore.intelligence, array)).toBe(0);
    expect(calculateAbilityModifierFromScores(AbilityScore.wisdom, array)).toBe(0);
    expect(calculateAbilityModifierFromScores(AbilityScore.charisma, array)).toBe(+1);
  });

  it('should give correct modifiers from AbilityScore object', () => {
    const array = initAbilityScores({
      strength: 7,
      dexterity: 8,
      constitution: 9,
      intelligence: 11,
      wisdom: 10,
      charisma: 12,
    });
    expect(calculateAbilityModifierFromScore(array.strength)).toBe(-2);
    expect(calculateAbilityModifierFromScore(array.dexterity)).toBe(-1);
    expect(calculateAbilityModifierFromScore(array.constitution)).toBe(-1);
    expect(calculateAbilityModifierFromScore(array.intelligence)).toBe(0);
    expect(calculateAbilityModifierFromScore(array.wisdom)).toBe(0);
    expect(calculateAbilityModifierFromScore(array.charisma)).toBe(+1);
  });

  it('should give correct modifiers from numbers', () => {
    const array = initAbilityScores({
      strength: 7,
      dexterity: 8,
      constitution: 9,
      intelligence: 11,
      wisdom: 10,
      charisma: 12,
    });
    expect(calculateAbilityModifier(array.strength.score)).toBe(-2);
    expect(calculateAbilityModifier(array.dexterity.score)).toBe(-1);
    expect(calculateAbilityModifier(array.constitution.score)).toBe(-1);
    expect(calculateAbilityModifier(array.intelligence.score)).toBe(0);
    expect(calculateAbilityModifier(array.wisdom.score)).toBe(0);
    expect(calculateAbilityModifier(array.charisma.score)).toBe(+1);
  });
});
