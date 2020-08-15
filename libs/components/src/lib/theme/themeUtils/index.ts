import { Theme } from '../theme';
import { Context } from '../Theme/colors';

export enum BackgroundShade {
  light = 2,
  dark = 0,
  normal = 1,
}

export const getBackgroundColor = (theme: Theme, shade: BackgroundShade = 1) => theme.colors.background[shade];

export enum Shade {
  normal = 3,
  light = 4,
  lighter = 5,
  lightest = 6,
  dark = 2,
  darker = 1,
  darkest = 0,
}

export const getContextColor = (theme: Theme, context: keyof Context = 'primary', shade: Shade = 3) => theme.colors.context[shade];

export const getGreyscaleColor = (theme: Theme, shade: Shade = 3) => theme.colors.greyscale[shade]
