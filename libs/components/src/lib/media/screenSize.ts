const maxWidthMediaQuery = (maxWidth: number) => `@media only screen and (max-width: ${maxWidth}px)`;
const minWidthMediaQuery = (minWidth: number) => `@media only screen and (min-width: ${minWidth}px)`;

export const screenSize = {
  custom: {
    max: maxWidthMediaQuery,
    min: minWidthMediaQuery,
  },
  /* Extra small devices (phones, 600px and down) */
  xs: maxWidthMediaQuery(600),
  /* Small devices (portrait tablets and large phones, 600px and up) */
  sm: minWidthMediaQuery(600),
  /* Medium devices (landscape tablets, 768px and up) */
  md: minWidthMediaQuery(768),
  /* Large devices (laptops/desktops, 992px and up) */
  lg: minWidthMediaQuery(992),
  /* Extra large devices (large laptops and desktops, 1200px and up) */
  xl: minWidthMediaQuery(1200),
};
