import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from "@angular/forms/forms";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { Ingredient } from '../shared/ingredient';

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnInit {

  /*@ViewChild('shoppingListForm')
  shoppingListForm;*/

  constructor(private sls :ShoppingListService) { }

  ngOnInit() {
  }

  onSubmit(shoppingListForm: FormGroup) {
    console.log(shoppingListForm);
    this.sls.addIngredient(new Ingredient(shoppingListForm.value.itemName, shoppingListForm.value.itemAmount));
    console.log('items:', this.sls.getIngredients());
  }

}
