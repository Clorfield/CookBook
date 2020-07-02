import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { RecipeDetail, RecipeModel } from 'src/models/recipe-model';

@Injectable({
    providedIn: 'root'
})
export class RecipesService {

    prefix = '/api/cookbook';

    constructor(private http: HttpClient) { }

    getRecipes(): Observable<RecipeModel[]> {
        return this.http.get<RecipeModel[]>(this.prefix);
    }

    getRecipe(recipeId: number): Observable<RecipeDetail> {
        return this.http.get<RecipeDetail>(`${this.prefix}/GetRecipe/${recipeId}`);
    }
}
