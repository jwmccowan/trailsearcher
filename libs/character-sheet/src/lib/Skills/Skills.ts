import { Proficiency } from '../Proficiency';
import { ProficiencyStat } from '../ProficiencyStat';
import { AbilityScore } from '../AbilityScore';

export enum Skill {
  acrobatics = 'acrobatics',
  arcana = 'arcana',
  athletics = 'athletics',
  crafting = 'crafting',
  deception = 'deception',
  diplomacy = 'diplomacy',
  intimidation = 'intimidation',
  lore = 'lore',
  medicine = 'medicine',
  nature = 'nature',
  occultism = 'occultism',
  performance = 'performance',
  religion = 'religion',
  society = 'society',
  stealth = 'stealth',
  survival = 'survival',
  thievery = 'thievery',
}

const SkillData: Record<Skill, SkillDatum> = Object.freeze({
  acrobatics: {
    keyAbilityScore: AbilityScore.dexterity,
    name: 'acrobatics',
  },
  arcana: {
    keyAbilityScore: AbilityScore.intelligence,
    name: 'arcana',
  },
  athletics: {
    keyAbilityScore: AbilityScore.strength,
    name: 'athletics',
  },
  crafting: {
    keyAbilityScore: AbilityScore.intelligence,
    name: 'crafting',
  },
  deception: {
    keyAbilityScore: AbilityScore.charisma,
    name: 'deception',
  },
  diplomacy: {
    keyAbilityScore: AbilityScore.charisma,
    name: 'diplomacy',
  },
  intimidation: {
    keyAbilityScore: AbilityScore.charisma,
    name: 'intimidation',
  },
  lore: {
    keyAbilityScore: AbilityScore.intelligence,
    name: 'lore',
  },
  medicine: {
    keyAbilityScore: AbilityScore.wisdom,
    name: 'medicine',
  },
  nature: {
    keyAbilityScore: AbilityScore.wisdom,
    name: 'nature',
  },
  occultism: {
    keyAbilityScore: AbilityScore.intelligence,
    name: 'occultism',
  },
  performance: {
    keyAbilityScore: AbilityScore.charisma,
    name: 'performance',
  },
  religion: {
    keyAbilityScore: AbilityScore.wisdom,
    name: 'religion',
  },
  society: {
    keyAbilityScore: AbilityScore.intelligence,
    name: 'society',
  },
  stealth: {
    keyAbilityScore: AbilityScore.dexterity,
    name: 'stealth',
  },
  survival: {
    keyAbilityScore: AbilityScore.wisdom,
    name: 'survival',
  },
  thievery: {
    keyAbilityScore: AbilityScore.dexterity,
    name: 'thievery',
  },
});

export type SkillDatum = {
  name: string;
  keyAbilityScore: AbilityScore;
};

export type CharacterSkill = ProficiencyStat & {
  name: Skill;
};

export type CharacterSkills = Record<Skill, CharacterSkill>;

export const initSkills = (initialProficiencies?: Partial<Record<Skill, Proficiency>>): CharacterSkills => {
  const skills: Partial<CharacterSkills> = {};
  for (const skill in SkillData) {
    const { name, keyAbilityScore } = SkillData[skill];
    skills[skill] = {
      bonuses: [],
      keyAbilityScore,
      name,
      proficiency:
        initialProficiencies && initialProficiencies[skill] ? initialProficiencies[skill] : Proficiency.untrained,
    };
  }
  return skills as CharacterSkills;
};
