import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { RecipeDetail, RecipeModel } from 'src/models/recipe-model';

@Injectable({
    providedIn: 'root'
})
export class RecipesService {

  prefix = '/api/cookbook';

  deleteRecipeSubject$ = new Subject<number>();
  
  constructor(private http: HttpClient) { }

  getRecipes(): Observable<RecipeModel[]> {
    return this.http.get<RecipeModel[]>(this.prefix);
  }

  getRecipe(recipeId: number): Observable<RecipeDetail> {
    return this.http.get<RecipeDetail>(`${this.prefix}/GetRecipe/${recipeId}`);
  }

  deleteRecipe(recipeId: number): Observable<RecipeModel[]> {
    return this.http.post<RecipeModel[]>(`${this.prefix}/DeleteRecipe`, recipeId);
  }
}
