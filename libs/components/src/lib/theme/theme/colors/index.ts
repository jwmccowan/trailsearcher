export type Colors = {
  context: Context;
  background: [string, string, string];
}

export type ContextPalette = [string, string, string, string, string, string, string];

export type Context = {
  primary: ContextPalette;
  alert: ContextPalette;
  danger: ContextPalette;
  secondary: ContextPalette;
}

export const context: Context = {
  alert: ['','','','','','',''],
  danger: ['','','','','','',''],
  primary: ['','','','','','',''],
  secondary: ['','','','','','',''],
}

export const colors: Colors = {
  background: ['#222222', '#3e3e3e', '#515151'],
  context,
};
