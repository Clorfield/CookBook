import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RecipesService {

    prefix = '/api/cookbook';

    constructor(private http: HttpClient) { }

    getRecipes(): any {
        return this.http.get(this.prefix);
    }

    getRecipe(recipeId: number): any {
        return this.http.get(`${this.prefix}/GetRecipe/${recipeId}`);
    }
}
