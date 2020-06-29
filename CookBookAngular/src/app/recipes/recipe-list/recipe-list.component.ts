import { Component, OnInit } from '@angular/core';
import { RecipeModel } from 'src/models/recipe-model';
import { orderBy } from 'lodash';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: RecipeModel[] = [
    {title: "Pidada Mudada", shortDescription: "Put your food in my hands", description: "", ingredients: []},
    {title: "Didada Mudada", shortDescription: "Put your food in my hands", description: "", ingredients: []},
    {title: "Cidada Mudada", shortDescription: "Put your food in my hands", description: "", ingredients: []}
  ];

  sortOptions: string[] = [
    'Title - asc',
    'Title - desc',
    'Description - asc',
    'Description - desc'
  ];

  selectedSortOption = '';

  constructor() { }

  ngOnInit() {
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
      case 'Description - asc':
        this.recipes = orderBy(this.recipes, 'description', 'asc');
        break;
      case 'Description - desc':
        this.recipes = orderBy(this.recipes, 'description', 'desc');
        break;
      }
  }

}
