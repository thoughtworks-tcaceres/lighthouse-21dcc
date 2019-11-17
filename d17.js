const judgeVegetable = (vegetables, metric) => {
  let name = "";
  largest = 0;
  vegetables.forEach((vegetable) => {
    if (vegetable[metric] > largest) {
      name = vegetable.submitter;
      largest = vegetable[metric];
    }
  });
  return name;
};
