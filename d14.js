const dynamicPricing = (numberOfPeople, distanceTraveled) => {
  return `$${(1 + distanceTraveled * 0.25 + (numberOfPeople >= 30 ? 0.25 : 0)).toFixed(2)}`;
};
