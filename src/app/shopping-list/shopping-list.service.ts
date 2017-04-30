import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class ShoppingListService {

  private items: Ingredient[] = [];

  constructor() { }

  addIngredient(items: Ingredient[]){
    Array.prototype.push.apply(this.items, items);
  }

  getIngredients(){
    return this.items.slice();
  }

}
