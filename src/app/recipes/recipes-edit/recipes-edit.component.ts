import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { RecipeService } from "../recipe.service";
import { Recipe } from "../recipe";

@Component({
  selector: 'rb-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit {

  recipeName;
  editMode: boolean = false;

  recipeEditForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private recipeService: RecipeService) { }

  ngOnInit() {
    // route
    this.route.params.subscribe(
      (params: Params) => {
        this.recipeName = params['id'];
        this.editMode = this.recipeName != null;
        this.initForm();
      }
    );
  }

  initForm() {
    let name = '';
    let imagePath = '';
    let description = '';
    let ingredients = new FormArray([]);

    if (this.editMode) {
      const recipeToEdit = this.recipeService.getRecipe(this.recipeName);
      name = recipeToEdit.name;
      imagePath = recipeToEdit.imagePath;
      description = recipeToEdit.description;
      if (recipeToEdit['ingrediants']) {
        for (let ingredient of recipeToEdit.ingrediants) {
          ingredients.push(new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'quantity': new FormControl(ingredient.quantity, [
                Validators.required,
                Validators.pattern(/^[0-9]+[0-9]*$/)
            ])
          }));
        }
      }
    }
    // Form
    this.recipeEditForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'imagePath': new FormControl(imagePath, Validators.required),
      'description': new FormControl(description, Validators.required),
      'ingredients': ingredients
    });
  }

  newIngredientControl() {
    (<FormArray>this.recipeEditForm.get('ingredients')).push(new FormGroup({
        'name': new FormControl(null, Validators.required),
        'quantity': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[0-9]+[0-9]*$/)
        ])
    }))
  }

  onCancel() {
    this.recipeEditForm.reset();
    this.router.navigate(['recipes']);
  }

  onRemoveIngredient(index: number) {
    (<FormArray>this.recipeEditForm.get('ingredients')).removeAt(index);
  }

  onSubmit() {
    console.log(this.recipeEditForm.value);
    const recipe = new Recipe(this.recipeEditForm.value.name,
      this.recipeEditForm.value.description,
      this.recipeEditForm.value.imagePath,
      this.recipeEditForm.value.ingredients);
    this.recipeService.save(recipe);
    this.onCancel();
  }

}
