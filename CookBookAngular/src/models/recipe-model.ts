export class RecipeModel {
    id: number;
    title: string;
    shortDescription: string;
    description: string;
    ingredients: Ingredient[];
    fatherRecipeId: number
}

export class Ingredient {
    id: number;
    title: string;
    amount: number;
}
