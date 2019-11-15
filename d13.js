const lightsOn = function(lights) {
  return lights.map((light) => {
    return { id: light.id, on: true };
  });
};

const lightsOff = function(lights) {
  return lights.map((light) => {
    return { id: light.id, on: false };
  });
};

const toggleLights = function(lights, lightsAreOn) {
  return lights.map((light) => {
    return { id: light.id, on: !lightsAreOn };
  });
};
