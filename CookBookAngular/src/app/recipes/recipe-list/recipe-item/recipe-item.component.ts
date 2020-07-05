import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from 'src/models/recipe-model';
import { RecipesService } from 'src/services/recipes.service';
import { Router } from '@angular/router';
import { ConfirmDialogService } from 'src/services/confirm-dialog.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: RecipeModel;

  constructor(
    private recipesService: RecipesService,
    private router: Router,
    private confirmDialogService: ConfirmDialogService) { }

  ngOnInit() {
  }

  redirectToRecipe() {
    this.router.navigateByUrl(`/recipe/${this.recipe.id}`);
  }

  deleteRecipe(event) {
    event.stopPropagation();
    this.confirmDialogService.confirmThis("Are you sure you want to delete this recipe?", () => {  
      this.recipesService.deleteRecipe(this.recipe.id).subscribe((childrenRecipies: RecipeModel[]) => {
        if (childrenRecipies) {
          childrenRecipies.forEach(r => {
            this.recipesService.deleteRecipeSubject$.next(r.id);
          });
        }
        this.recipesService.deleteRecipeSubject$.next(this.recipe.id);
      });
    }, () => {})  
  }

  createRecipeFromCurrent(event) {
    event.stopPropagation();

    this.router.navigateByUrl(`/addRecipe/${this.recipe.id}`);
  }
}
