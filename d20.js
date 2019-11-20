const PI = 3.14159;

const sphereVolume = function(radius) {
  return (4 / 3) * PI * radius ** 3;
};

const coneVolume = function(radius, height) {
  return (PI * radius ** 2 * height) / 3;
};

const prismVolume = function(height, width, depth) {
  return height * width * depth;
};

const totalVolume = function(solids) {
  let volume = 0;
  for (const solid of solids) {
    switch (solid.type) {
      case "sphere":
        volume += sphereVolume(solid.radius);
        break;
      case "cone":
        volume += coneVolume(solid.radius, solid.height);
        break;
      case "prism":
        volume += prismVolume(solid.height, solid.width, solid.depth);
        break;
    }
  }
  return volume;
};
