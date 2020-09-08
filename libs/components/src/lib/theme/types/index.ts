export type Colors = {
  primary: string;
  primaryVariant: string;
  secondary: string;
  secondaryVariant: string;
  background: string;
  surface: string;
  error: string;
  onPrimary: string;
  onSecondary: string;
  onBackground: string;
  onSurface: string;
  onError: string;
};

export type Spacing = {
  MD: string;
  SM: string;
  XS: string;
  XXS: string;
  XXXS: string;
  NONE: string;
  LG: string;
  XL: string;
  XXL: string;
  XXXL: string;
};

export type Text = {
  emphasis: Emphasis;
};

export type Emphasis = {
  high: number;
  medium: number;
  disabled: number;
};

export type Theme = {
  colors: Colors;
  spacing: Spacing;
  text: Text;
};
