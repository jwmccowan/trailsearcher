import { Spacing, spacing } from './spacing';
import { Colors, colors } from './colors';

export type Theme = {
  colors: Colors;
  spacing: Spacing;
}

export const defaultTheme = {
  colors,
  spacing,
}