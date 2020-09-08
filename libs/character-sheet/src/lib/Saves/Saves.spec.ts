import { initSavingThrows, SavingThrow } from './Saves';
import { AbilityScore } from '../AbilityScore';
import { Proficiency } from '../Proficiency';
import { initCharacterSheet } from '../CharacterSheet';
import { getSavingThrowValue } from './CalculatedSaves';

describe('skills', () => {
  it('should init a saving throw array', () => {
    const saves = initSavingThrows();
    expect(saves.reflex.name).toBe(SavingThrow.reflex);
    expect(saves.fortitude.keyAbilityScore).toBe(AbilityScore.constitution);
    expect(saves.will.proficiency).toBe(Proficiency.untrained);
  });

  it('should init a saving throw array with initial values', () => {
    const skills = initSavingThrows({ reflex: Proficiency.expert });
    expect(skills.reflex.proficiency).toBe(Proficiency.expert);
    expect(skills.will.proficiency).toBe(Proficiency.untrained);
  });

  describe('character sheet saves', () => {
    it('should calculate skills appropriately with brand new character', () => {
      const cs = initCharacterSheet();
      expect(getSavingThrowValue(SavingThrow.reflex, cs)).toBe(0);
    });

    it('should calculate skills appropriately with overriden initial values', () => {
      const cs = initCharacterSheet({
        initialSaves: { will: Proficiency.trained },
        initialScores: { wisdom: 15 },
      });
      expect(getSavingThrowValue(SavingThrow.will, cs)).toBe(5);
      expect(getSavingThrowValue(SavingThrow.fortitude, cs)).toBe(0);
    });
  });
});
