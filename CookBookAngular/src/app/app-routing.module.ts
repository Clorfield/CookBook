import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { AddRecipeComponent } from './recipes/add-recipe/add-recipe.component';

const appRoutes: Routes =[
  { path: 'recipes', component: RecipesComponent },
  { path: 'addRecipe', component: AddRecipeComponent },
  { path: 'addRecipe/:id', component: AddRecipeComponent },
  { path: 'recipe/:id', component: RecipeDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
