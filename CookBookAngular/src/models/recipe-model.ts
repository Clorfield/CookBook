export class RecipeModel {
    title: string;
    shortDescription: string;
    description: string;
    ingredients: Ingredient[];
}

export class Ingredient {
    title: string;
    amount: number;
}
