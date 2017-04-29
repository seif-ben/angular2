import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from "app/recipes/recipes.component";
import { ShoppingListComponent } from "app/shopping-list/shopping-list.component";
import { RecipesDetailComponent } from "app/recipes/recipes-detail/recipes-detail.component";
import { RecipesEditComponent } from "app/recipes/recipes-edit/recipes-edit.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipesComponent, children: [
        {path: 'new', component: RecipesEditComponent },
        {path: ':id', component: RecipesDetailComponent },
        {path: ':id/edit', component: RecipesEditComponent }
    ]},
    {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [
      RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class RoutingModule {

}