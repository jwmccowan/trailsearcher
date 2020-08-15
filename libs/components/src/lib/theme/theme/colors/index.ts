export type Colors = {
  context: Context;
  background: [string, string, string];
  greyscale: Greyscale;
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

export type Greyscale = ContextPalette;

export const greyscale: Greyscale = ['#000000', '#232323', '#484848', '#696969', '#999999', '#bcbcbc', '#ffffff']

export const colors: Colors = {
  background: ['#222222', '#3e3e3e', '#515151'],
  context,
  greyscale,
};
