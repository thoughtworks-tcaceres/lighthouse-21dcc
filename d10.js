const whereCanIPark = (spots, vehicle) => {
  const searchChar = [];
  switch (vehicle) {
    case "motorcycle":
      searchChar.push("M");
    case "small":
      searchChar.push("S");
    case "regular":
      searchChar.push("R");
  }

  for (let i = 0; i < spots.length; i++) {
    const position = spots[i].findIndex((spot) => searchChar.includes(spot));
    if (position >= 0) {
      return [position, i];
    }
  }
  return false;
};
