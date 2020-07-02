import { Component, OnInit } from '@angular/core';
import { RecipeModel } from 'src/models/recipe-model';
import { orderBy } from 'lodash';
import { RecipesService } from 'src/services/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: RecipeModel[] = [];

  sortOptions: string[] = [
    'Title - asc',
    'Title - desc'
  ];

  selectedSortOption = '';

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipesService.getRecipes().subscribe((recipes: RecipeModel[]) => this.recipes = recipes);
  }
  
  public sortRecipeByOption(event) {
    this.selectedSortOption = event.target.value;
    switch(this.selectedSortOption) {
      case 'Title - asc':
        this.recipes = orderBy(this.recipes, 'title', 'asc');
        break;
      case 'Title - desc':
        this.recipes = orderBy(this.recipes, 'title', 'desc');
        break;
      }
  }

}
