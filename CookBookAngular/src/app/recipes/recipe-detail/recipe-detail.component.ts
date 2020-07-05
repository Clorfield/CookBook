import { Ingredient, RecipeDetail } from './../../../models/recipe-model';
import { RecipeModel } from './../../../Models/recipe-model';
import { Component, OnInit, Input } from '@angular/core';
import { RecipesService } from 'src/services/recipes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeId: number;
  recipe: RecipeDetail;
  ingredients: Ingredient[] = [];
  breadcrumbs: RecipeModel[] = [];

  constructor(
    private recipesService: RecipesService,
    private activateRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.recipeId = this.activateRoute.snapshot.params['id'];
    this.recipesService.getRecipe(this.recipeId).subscribe(recipe => {
      this.recipe = recipe;
      this.populateIngredients(recipe);
      if (recipe.parentRecipes) {
        this.generateBreadCrumbs(recipe);
      }
    });
  }

  populateIngredients(recipe: RecipeDetail) {
    recipe.ingredients.forEach(i => this.ingredients.push(i));
  }

  generateBreadCrumbs(recipe: RecipeDetail) {
    recipe.parentRecipes.reverse().forEach(pr => {
      this.breadcrumbs.push(pr);
    });
    const currentRecipe = new RecipeModel();
    currentRecipe.id = recipe.id;
    currentRecipe.title = recipe.title;
    this.breadcrumbs.push(currentRecipe);
  }

  displayBreadcrumbItem(breadcrumb: RecipeModel): string {
    const breadcrumbText = breadcrumb.title.replace(':', '');
    return `${breadcrumbText} >`;
  }

  breadcrumbsClick(breadcrumb: RecipeModel) {
    this.router.navigateByUrl('/', {skipLocationChange: true})
      .then(() => this.router.navigateByUrl(`/recipe/${breadcrumb.id}`));
  }
}
