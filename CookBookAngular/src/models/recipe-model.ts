export class RecipeModel {
    id: number;
    title: string;
    shortDescription: string;
    description: string;
    ingredients: Ingredient[];
    fatherRecipeId: number;
    childrenRecipies: RecipeModel[];
}

export class RecipeDetail {
    id: number;
    title: string;
    shortDescription: string;
    description: string;
    ingredients: Ingredient[];
    parentRecipes: RecipeModel[];
}

export class AddRecipeModel {
    title: string;
    shortDescription: string;
    description: string;
    ingredients: Ingredient[];
    fatherRecipeId: number;
}

export class Ingredient {
    title: string;
    amount: number;
}
