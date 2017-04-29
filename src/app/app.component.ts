import { Component } from '@angular/core';
import { HeaderComponent} from './header/header.component';
import { RecipeService} from './recipes/recipe.service';

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  providers: [RecipeService]
})
export class AppComponent {
}
