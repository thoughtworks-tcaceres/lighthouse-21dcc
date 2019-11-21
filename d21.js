const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  for (const recipe of recipes) {
    const foundBakeryA = bakeryA.find((itemA) => recipe.ingredients.includes(itemA));
    const foundBakeryB = bakeryB.find((itemB) => recipe.ingredients.includes(itemB));
    if (foundBakeryA && foundBakeryB) {
      return recipe.name;
    }
  }
};
