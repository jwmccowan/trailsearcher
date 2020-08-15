import { Theme } from '../theme';

export enum BackgroundPalette {
  light = 2,
  dark = 0,
  normal = 1,
}

export const getBackgroundColor = (theme: Theme, shade: BackgroundPalette = BackgroundPalette.normal) => theme.colors.background[shade];