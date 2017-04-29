import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipesItemComponent } from './recipes-item.component';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'rb-recipes-list',
  templateUrl: './recipes-list.component.html'
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [];

  //@Output()
  //recipeSelected = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  //onSelected(recipe: Recipe) {
    //this.recipeSelected.emit(recipe);
    //this.router.navigate([recipe.name], {relativeTo: this.activatedRoute});
  //}

}
