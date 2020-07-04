using CookBookDAL.Models;
using System.Collections.Generic;

namespace CookBookDAL.Interfaces
{
    interface IRecipesRepository
    {
        int AddRecipe(AddRecipeDto item);
        RecipeDto FindRecipeById(int id);
        List<RecipeDto> GetRecipes();
        void RemoveRecipe(int id);
        List<RecipeDto> GetAllChildrenRecipes(int id);
        void UpdateRecipe(RecipeDto item);
        void GetChildrenNodes(List<Recipe> children, Recipe recipe);
        void RemoveRecipeFromParentsRecipies(int id);
    }
}
