export const breakpoints = {
  sm: 20,
  md: 30,
  lg: 50,
  xl: 64,
  xxl: 75,
};

export const mediaQueries = (key) => {
  return (style) => `@media (min-width: ${breakpoints[key]}em) { ${style} }`;
};
