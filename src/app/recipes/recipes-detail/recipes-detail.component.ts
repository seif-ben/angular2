import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Params } from "@angular/router";
import { RecipeService } from "app/recipes/recipe.service";
import { Ingredient } from "app/shared/ingredient";

@Component({
  selector: 'rb-recipes-detail',
  templateUrl: './recipes-detail.component.html'
})
export class RecipesDetailComponent implements OnInit {

  //@Input()
  selectedRecipe: Recipe;
  ingredients: Ingredient[];

  constructor(private sls: ShoppingListService,
    private route: ActivatedRoute,
    private recipeService: RecipeService) { }

  ngOnInit() {
    //let id = this.route.snapshot.params['id'];
    //this.selectedRecipe = this.recipeService.getRecipe(id);

    //on souscrit à lObservebal params pour mettre à jour le selectedRecipe une fois les Route param ont changé.
    this.route.params.subscribe(
      (params: Params) => {
        this.selectedRecipe = this.recipeService.getRecipe(params['id']);
      }
    );

    // Display ingredients
    this.ingredients = this.selectedRecipe.ingrediants.slice();
  }

  addToShoppingList() {
    this.sls.addIngredients(this.selectedRecipe !== undefined ? this.selectedRecipe.ingrediants.slice() : []);
  }

}
