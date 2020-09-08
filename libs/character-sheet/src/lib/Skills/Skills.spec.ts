import { initSkills, Skill } from './Skills';
import { AbilityScore } from '../AbilityScore';
import { Proficiency } from '../Proficiency';
import { initCharacterSheet } from '../CharacterSheet';
import { getSkillValue } from './CalculatedSkills';

describe('skills', () => {
  it('should init a skill array', () => {
    const skills = initSkills();
    expect(skills.acrobatics.name).toBe(Skill.acrobatics);
    expect(skills.lore.keyAbilityScore).toBe(AbilityScore.intelligence);
    expect(skills.occultism.proficiency).toBe(Proficiency.untrained);
  });

  it('should init a skill array', () => {
    const skills = initSkills({ medicine: Proficiency.expert });
    expect(skills.medicine.proficiency).toBe(Proficiency.expert);
    expect(skills.thievery.proficiency).toBe(Proficiency.untrained);
  });

  describe('character sheet skills', () => {
    it('should calculate skills appropriately with brand new character', () => {
      const cs = initCharacterSheet();
      expect(getSkillValue(Skill.acrobatics, cs)).toBe(0);
    });

    it('should calculate skills appropriately with overriden initial values', () => {
      const cs = initCharacterSheet({
        initialProficiencies: { medicine: Proficiency.trained },
        initialScores: { wisdom: 15 },
      });
      expect(getSkillValue(Skill.medicine, cs)).toBe(5);
      expect(getSkillValue(Skill.survival, cs)).toBe(2);
      expect(getSkillValue(Skill.thievery, cs)).toBe(0);
    });
  });
});
