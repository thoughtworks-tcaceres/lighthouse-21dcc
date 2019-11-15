const chooseStations = (stations) => {
  return stations
    .filter(
      (station) =>
        station[1] >= 20 && (station[2] === "community centre" || station[2] === "school")
    )
    .map((filteredStation) => filteredStation[0]);
};
