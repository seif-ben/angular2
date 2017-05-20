import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient';
import { Subject } from "rxjs/Subject";

@Injectable()
export class ShoppingListService {

  ingredientChanged = new Subject<Ingredient[]>();
  selectedItemChanged = new Subject<Ingredient>();

  private items: Ingredient[] = [];

  constructor() { }

  selectItem(item) {
    this.selectedItemChanged.next(item);
  }

  addIngredients(items: Ingredient[]){
    Array.prototype.push.apply(this.items, items);
    this.ingredientChanged.next(items);
  }

  addIngredient(item: Ingredient) {
    let found = false;
    this.items.forEach((current: Ingredient, index) => {
      if (current.name === item.name) {
        this.items[index] = item;
        found = true;
      }
    });

    if (!found) {
      this.items.push(item);
    }
    this.ingredientChanged.next([item]);
  }

  getIngredients(){
    return this.items.slice();
  }

  removeIngredient(item) {
    this.items.forEach((current: Ingredient, index) => {
      if (current.name === item.name) {
        this.items.splice(index, 1);
      }
    });
    this.ingredientChanged.next(this.items);
  }

}
