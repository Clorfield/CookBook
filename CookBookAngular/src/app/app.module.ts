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
   exports: [
      ConfirmDialogComponent
   ],
   providers: [
      ConfirmDialogService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
