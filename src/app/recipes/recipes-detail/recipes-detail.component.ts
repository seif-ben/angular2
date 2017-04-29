import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'rb-recipes-detail',
  templateUrl: './recipes-detail.component.html'
})
export class RecipesDetailComponent implements OnInit {

  @Input()
  selectedRecipe: Recipe;

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }

  addToShoppingList() {
    this.sls.addIngredient(this.selectedRecipe !== undefined ? this.selectedRecipe.ingrediants : []);
  }

}
