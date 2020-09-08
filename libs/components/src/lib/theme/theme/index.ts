import { spacing } from './spacing';
import { colors } from './colors';
import { Colors, Spacing } from '../types';

export type Theme = {
  colors: Colors;
  spacing: Spacing;
};

export const defaultTheme = {
  colors,
  spacing,
};
