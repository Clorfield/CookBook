export class RecipeModel {
    id: number;
    title: string;
    shortDescription: string;
    description: string;
    ingredients: Ingredient[];
    fatherRecipeId: number
}

export class RecipeDetail {
    id: number;
    title: string;
    shortDescription: string;
    description: string;
    ingredients: Ingredient[];
    parentRecipes: RecipeModel[];
}

export class Ingredient {
    id: number;
    title: string;
    amount: number;
}
