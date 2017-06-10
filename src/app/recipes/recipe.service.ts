import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';
import { Subject } from "rxjs/Subject";

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

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

  save(recipe: Recipe) {
    let itemIndex = -1;
    this.recipes.forEach((item: Recipe, index) => {
      if (item.name === recipe.name) {
        this.recipes[index] = recipe;
        itemIndex = index;
      }
    });
    if (itemIndex === -1) {
      this.recipes.push(recipe);
    }
    this.recipesChanged.next(this.recipes);
  }

  getRecipes() {
    return this.recipes.slice();
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

  delete(recipe: Recipe) {
    let index = -1;
    this.recipes.forEach((item: Recipe, i) => {
      if (item.name === recipe.name) {
        index = i;
      }
    });

    if(index !== -1){
      this.recipes.splice(index, 1);      
      this.recipesChanged.next(this.recipes);
    }
  }
}
