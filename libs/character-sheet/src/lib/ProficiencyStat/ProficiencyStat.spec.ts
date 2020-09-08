import { initCharacterSheet } from '../CharacterSheet';
import { Skill } from '../Skills';
import { Proficiency } from '../Proficiency';
import { getProficiencyStatValue } from '../ProficiencyStat';

describe('character sheet', () => {
  describe('character sheet skills', () => {
    it('should calculate skills appropriately with brand new character', () => {
      const cs = initCharacterSheet();
      expect(getProficiencyStatValue(cs.skills[Skill.acrobatics], cs)).toBe(0);
    });

    it('should calculate skills appropriately with overriden initial values', () => {
      const cs = initCharacterSheet({
        initialProficiencies: { medicine: Proficiency.trained },
        initialScores: { wisdom: 15 },
      });
      expect(getProficiencyStatValue(cs.skills[Skill.medicine], cs)).toBe(5);
      expect(getProficiencyStatValue(cs.skills[Skill.survival], cs)).toBe(2);
      expect(getProficiencyStatValue(cs.skills[Skill.thievery], cs)).toBe(0);
    });
  });
});
