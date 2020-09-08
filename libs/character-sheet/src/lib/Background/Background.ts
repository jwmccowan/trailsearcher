import { Feature } from '../Feature/Feature';
import { AbilityScore } from '../AbilityScore';

export enum Background {
  artisan = 'artisan',
  soldier = 'soldier',
  warthog = 'warthog',
}

export type BackgroundFeature = Feature<Background> & {
  abilityScoreModifiers: AbilityScore[];
};

const backgroundData: Record<Background, BackgroundFeature> = {
  artisan: {
    key: Background.artisan,
    displayName: 'Artisan',
    abilityScoreModifiers: [AbilityScore.dexterity, AbilityScore.intelligence],
  },
  soldier: {
    key: Background.soldier,
    displayName: 'Soldier',
    abilityScoreModifiers: [AbilityScore.dexterity, AbilityScore.intelligence],
  },
  warthog: {
    key: Background.warthog,
    displayName: 'Warthog',
    abilityScoreModifiers: [AbilityScore.dexterity, AbilityScore.intelligence],
  },
};

export const getBackground = (background: Background): BackgroundFeature => backgroundData[background];

export const getBackgroundList = (): BackgroundFeature[] => Object.keys(Background).map(getBackground);
