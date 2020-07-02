import { RecipeModel } from './../../../Models/recipe-model';
import { Component, OnInit, Input } from '@angular/core';
import { RecipesService } from 'src/services/recipes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeId: number;
  recipe: RecipeModel;

  constructor(
    private recipesService: RecipesService,
    private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.recipeId = this.activateRoute.snapshot.params['id'];
    this.recipesService.getRecipe(this.recipeId).subscribe(recipe => {
      this.recipe = recipe;
    });
  }

}
