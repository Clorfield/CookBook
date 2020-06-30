using CookBookDAL.Models;
using System.Collections.Generic;

namespace CookBookDAL.Interfaces
{
    interface IRecipesRepository
    {
        void AddRecipe(AddRecipeDto item);
        RecipeDto FindRecipeById(int id);
        List<RecipeDto> GetRecipes();
        void RemoveRecipe(int id);
        void UpdateRecipe(RecipeDto item);
    }
}
