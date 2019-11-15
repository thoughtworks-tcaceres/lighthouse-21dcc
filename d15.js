const finalPosition = (moves) => {
  let axis = [0, 0];
  moves.forEach((move) => {
    switch (move) {
      case "north":
        axis[1]++;
        break;
      case "south":
        axis[1]--;
        break;
      case "east":
        axis[0]++;
        break;
      case "west":
        axis[0]--;
        break;
    }
  });
  return axis;
};
