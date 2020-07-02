using CookBookDAL.Models;
using System.Collections.Generic;

namespace CookBookBL.Interfaces
{
    interface IRecipeBl
    {
        void AddRecipe(AddRecipeDto item);
        RecipeDetails FindRecipeById(int id);
        List<RecipeDto> GetRecipes();
        void RemoveRecipe(int id);
        void UpdateRecipe(RecipeDto item);
    }
}
