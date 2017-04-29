import { Component, OnInit, Input } from '@angular/core';
import { Recipe} from '../recipe';

@Component({
  selector: 'rb-recipes-item',
  templateUrl: './recipes-item.component.html'
})
export class RecipesItemComponent implements OnInit {

  @Input()
  recipe: Recipe;
  recipeId: number;

  constructor() { }

  ngOnInit() {
  }

}
