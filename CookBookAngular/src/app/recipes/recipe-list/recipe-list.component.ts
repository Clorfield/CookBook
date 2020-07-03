import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeModel } from 'src/models/recipe-model';
import { orderBy } from 'lodash';
import { RecipesService } from 'src/services/recipes.service';
import { Subject } from 'rxjs';
import { takeUntil } from "rxjs/operators";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: RecipeModel[] = [];

  sortOptions: string[] = [
    'Title - asc',
    'Title - desc'
  ];
  selectedSortOption = '';

  private destroy$: Subject<any> = new Subject<any>();

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipesService.getRecipes().subscribe((recipes: RecipeModel[]) => this.recipes = recipes);

    this.recipesService.deleteRecipeSubject$.pipe(
      takeUntil(this.destroy$)
    ).subscribe((id: number) => {
      this.recipes = this.recipes.filter(r => r.id != id);
    });
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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
