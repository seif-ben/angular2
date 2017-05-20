import { Component, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { FormGroup, NgForm } from "@angular/forms";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { Ingredient } from '../../shared/ingredient';
import { Subject } from "rxjs/Subject";
import { Subscription } from "rxjs/Subscription";
@Component({
  selector: 'rb-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html'
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {

  @ViewChild('shoppingListForm')
  shoppingListForm: NgForm;

  subscription: Subscription;

  editMode = false;

  selectedIngredient: Ingredient;

  constructor(private sls :ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.sls.selectedItemChanged.subscribe((selectedItem: Ingredient) => {
      if (selectedItem !== null) {
        this.editMode = true;
        this.shoppingListForm.form.patchValue({
          itemName: selectedItem.name,
          itemAmount: selectedItem.quantity
        });
        this.selectedIngredient = selectedItem;
        console.log('1 - ngChanges - shoppingListForm', this.shoppingListForm);
      }  
    });
  }

  onSubmit(shoppingListForm: FormGroup) {
    this.sls.addIngredient(new Ingredient(shoppingListForm.value.itemName, shoppingListForm.value.itemAmount));
    this.onClear();
  }

  onClear() {
    this.shoppingListForm.reset();
    this.editMode = false;
    this.selectedIngredient = null;
  }

  onDelete() {
    this.sls.removeIngredient(this.selectedIngredient);
    this.onClear();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
