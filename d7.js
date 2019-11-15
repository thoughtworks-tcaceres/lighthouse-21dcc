const termTopics = (interviews) => {
  let total = [0, 0, 0];
  for (let i = 0; i < interviews.length; i++) {
    switch (interviews[i]) {
      case "smart city":
        total[0]++;
        break;
      case "arts funding":
        total[1]++;
        break;
      case "transportation":
        total[2]++;
        break;
    }
  }
  return total;
};
