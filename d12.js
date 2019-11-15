const checkAir = function(samples, threshold) {
  const airQuality = {
    dirty: 0,
    clean: 0
  };

  for (const sample of samples) {
    switch (sample) {
      case "dirty":
        airQuality.dirty += 1;
        break;
      case "clean":
        airQuality.clean += 1;
        break;
    }
  }
  return airQuality.dirty / samples.length >= threshold ? "Polluted" : "Clean";
};
