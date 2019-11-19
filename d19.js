const pumpkinSpice = (money) => {
  let weight = 0;

  const numSlices = Math.floor(money / 5);
  money = money - numSlices * 5;
  weight += numSlices * 30;

  const numLattes = Math.floor(money / 3);
  money = money - numLattes * 3;
  weight += numLattes * 15;

  const numMacarons = money;
  weight += numMacarons * 3;

  return [numSlices, numLattes, numMacarons, weight];
};
