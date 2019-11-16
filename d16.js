const festivalColours = (color1) => {
  const h1 = Math.abs(color1 + 150);
  const h2 = Math.abs(color1 + 210);

  return h1 > h2 ? [h2, h1] : [h1, h2];
};
