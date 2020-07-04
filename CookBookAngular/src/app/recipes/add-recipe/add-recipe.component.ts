import { Ingredient, AddRecipeModel } from './../../../models/recipe-model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SharedModalProvider } from 'src/services/shared-modal-provider.service';
import { RecipesService } from 'src/services/recipes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  addRecipeForm : FormGroup;
  ingredients: Ingredient[] = [];

  constructor(
    private sharedModalProvider: SharedModalProvider,
    private recipesService: RecipesService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.addRecipeForm = this.formBuilder.group({        
      "title": ['', Validators.required],
      "shortDescription": ['', Validators.required],
      "description": ['']
    });
  }

  addIngredient() {
    const modal = this.sharedModalProvider.openAddIngredientModal();
    modal.afterClosed().subscribe((ingredient: Ingredient) => {
      if (ingredient) {
        this.ingredients.push(ingredient);
      }
    });
  }

  deleteIngredient(ingredient: Ingredient) {
    this.ingredients = this.ingredients.filter(i => i !== ingredient);
  }

  addRecipe() {
    var recipe = new AddRecipeModel();
    recipe.title = this.addRecipeForm.get('title').value;
    recipe.shortDescription = this.addRecipeForm.get('shortDescription').value;
    recipe.description = this.addRecipeForm.get('description').value;
    recipe.ingredients = this.ingredients;
    this.recipesService.addRecipe(recipe).subscribe((id) => {
      this.router.navigateByUrl(`/recipe/${id}`);
    });
  }
}
