using CookBookDAL.Models;
using System.Collections.Generic;

namespace CookBookBL.Interfaces
{
    interface IRecipeBl
    {
        int AddRecipe(AddRecipeDto item);
        RecipeDetails FindRecipeById(int id);
        List<RecipeDto> GetRecipes();
        List<RecipeDto> RemoveRecipe(int id);
        void UpdateRecipe(RecipeDto item);
    }
}
