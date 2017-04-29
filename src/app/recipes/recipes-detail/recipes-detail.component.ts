import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Params } from "@angular/router";
import { RecipeService } from "app/recipes/recipe.service";

@Component({
  selector: 'rb-recipes-detail',
  templateUrl: './recipes-detail.component.html'
})
export class RecipesDetailComponent implements OnInit {

  //@Input()
  selectedRecipe: Recipe;

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
  }

  addToShoppingList() {
    this.sls.addIngredient(this.selectedRecipe !== undefined ? this.selectedRecipe.ingrediants : []);
  }

}
