import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
      new Recipe('dummy1', 'dummy1', 'http://thumbs2.ebaystatic.com/d/l225/m/mM5u2kVAYbs3IRlwPfl6uOA.jpg', [
        new Ingredient('ingredient1', 2),
        new Ingredient('ingredient2', 1)
      ]),
      new Recipe('dummy2', 'dummy2', 'http://thumbs2.ebaystatic.com/d/l225/m/mM5u2kVAYbs3IRlwPfl6uOA.jpg', [])
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
