import { getProficiencyValueWithoutLevel, Proficiency, getProficiencyValue } from './Proficiency';

describe('proficiency', () => {
  it('should get correct proficiency value without level', () => {
    expect(getProficiencyValueWithoutLevel(Proficiency.untrained)).toBe(0);
    expect(getProficiencyValueWithoutLevel(Proficiency.trained)).toBe(2);
    expect(getProficiencyValueWithoutLevel(Proficiency.expert)).toBe(4);
    expect(getProficiencyValueWithoutLevel(Proficiency.master)).toBe(6);
    expect(getProficiencyValueWithoutLevel(Proficiency.legendary)).toBe(8);
  });

  it('should get correct proficiency value with level', () => {
    expect(getProficiencyValue(Proficiency.untrained, 1)).toBe(0);
    expect(getProficiencyValue(Proficiency.trained, 4)).toBe(6);
    expect(getProficiencyValue(Proficiency.expert, 8)).toBe(12);
    expect(getProficiencyValue(Proficiency.master, 12)).toBe(18);
    expect(getProficiencyValue(Proficiency.legendary, 16)).toBe(24);
  });
});
