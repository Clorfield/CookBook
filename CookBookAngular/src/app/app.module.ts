import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ConfirmDialogService } from 'src/services/confirm-dialog.service';
import { AngularMaterialModule } from 'src/angular-material.module';
import { AddIngredientModalComponent } from 'src/modals/add-ingredient-modal/add-ingredient-modal.component';
import { IngredientItemComponent } from './ingredient-item/ingredient-item.component';
import { AddRecipeComponent } from './recipes/add-recipe/add-recipe.component';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      RecipesComponent,
      RecipeListComponent,
      RecipeDetailComponent,
      RecipeItemComponent,
      FooterComponent,
      ConfirmDialogComponent,
      AddIngredientModalComponent,
      IngredientItemComponent,
      AddRecipeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      FormsModule,
      HttpClientModule,
      RouterModule,
      ReactiveFormsModule,
      AngularMaterialModule
   ],
   entryComponents: [
      AddIngredientModalComponent
   ],
   exports: [
      ConfirmDialogComponent,
      AddIngredientModalComponent
   ],
   providers: [
      ConfirmDialogService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
