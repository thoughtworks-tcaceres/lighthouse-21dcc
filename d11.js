const busTimes = (buses) => {
  const newObj = {};
  for (const bus in buses) {
    newObj[bus] = buses[bus].distance / buses[bus].speed;
  }
  return newObj;
};
