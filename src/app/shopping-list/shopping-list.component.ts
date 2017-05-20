import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from "rxjs/Subject";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  items: Ingredient[] = [];

  subscription : Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.items = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientChanged.subscribe((ingredients : Ingredient[]) => {
      this.items = this.shoppingListService.getIngredients();
    });
  }

  onSelect(item : Ingredient) {
    console.log(item);
    this.shoppingListService.selectItem(item);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
