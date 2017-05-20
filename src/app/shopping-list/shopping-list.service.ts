import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient';
import { Subject } from "rxjs/Subject";

@Injectable()
export class ShoppingListService {

  ingredientChanged = new Subject<Ingredient[]>();

  private items: Ingredient[] = [];

  constructor() { }

  addIngredients(items: Ingredient[]){
    Array.prototype.push.apply(this.items, items);
    this.ingredientChanged.next(items);
  }

  addIngredient(item: Ingredient){
    this.items.push(item);
    this.ingredientChanged.next([item]);
  }

  getIngredients(){
    return this.items.slice();
  }

}
