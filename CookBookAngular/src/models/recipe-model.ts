export class RecipeModel {
    id: number;
    title: string;
    shortDescription: string;
    description: string;
    ingredients: Ingredient[];
}

export class Ingredient {
    id: number;
    title: string;
    amount: number;
}
