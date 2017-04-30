import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
      new Recipe('Fricassé', 'Fricassé tunsien', 'http://1.bp.blogspot.com/-dLFJRkHH2qQ/VIWtdAsqbRI/AAAAAAAABlY/FVTDACtXHs0/s1600/13.jpg', [
        new Ingredient('Oeuf', 1),
        new Ingredient('Thon', 1),
        new Ingredient('Farine', 500),
        new Ingredient('Harissa', 250)
      ]),
      new Recipe('Lablebi', 'Lablebi tunsien delicieux', 'http://www.latunisienne.fr/wp-content/uploads/2014/06/lablabi-1.jpg', [
        new Ingredient('Poichiche', 100),
        new Ingredient('Thon', 1),
        new Ingredient('Olive', 10)
      ])
    ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  };

  getRecipe(id: String): Recipe {
    let result;
    this.recipes.forEach(function(recipe) {
      if (recipe.name === id){
        result = recipe;
      }
    });
    return result;
  }

}
