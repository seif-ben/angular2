import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipesItemComponent } from './recipes-item.component';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'rb-recipes-list',
  templateUrl: './recipes-list.component.html'
})
export class RecipesListComponent implements OnInit, OnDestroy {

  recipes: Recipe[] = [];
  subscription: Subscription;

  //@Output()
  //recipeSelected = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.subscription = this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });
  }

  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }

  //onSelected(recipe: Recipe) {
    //this.recipeSelected.emit(recipe);
    //this.router.navigate([recipe.name], {relativeTo: this.activatedRoute});
  //}

}
