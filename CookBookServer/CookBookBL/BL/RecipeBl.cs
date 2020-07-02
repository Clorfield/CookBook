using AutoMapper;
using CookBookDAL.Models;
using CookBookDAL.Repositories;
using System.Collections.Generic;

namespace CookBookBL.BL
{
    public class RecipeBl
    {
        private readonly IMapper _mapper;
        private readonly RecipesRepository _recipeRepository;

        public RecipeBl(IMapper mapper)
        {
            _mapper = mapper;
            _recipeRepository = new RecipesRepository(_mapper);
        }

        public void AddRecipe(AddRecipeDto item)
        {
            _recipeRepository.AddRecipe(item);
        }

        public RecipeDetails FindRecipeById(int id)
        {
            var recipe = PopulateParentRecipes(_recipeRepository.FindRecipeById(id));

            return recipe;
        }

        public List<RecipeDto> GetRecipes()
        {
            return _recipeRepository.GetRecipes();
        }

        public void RemoveRecipe(int id)
        {
            _recipeRepository.RemoveRecipe(id);
        }

        public void UpdateRecipe(RecipeDto item)
        {
            _recipeRepository.UpdateRecipe(item);
        }

        public RecipeDetails PopulateParentRecipes(RecipeDto recipe)
        {
            var processedRecipe = _mapper.Map<RecipeDetails>(recipe);

            if (recipe.fatherRecipeId != 0)
            {
                var parentRecipes = new List<RecipeDto>();
                RecipeDto parentRecipe = recipe;

                do
                {
                    parentRecipe = _recipeRepository.FindRecipeById(parentRecipe.fatherRecipeId);

                    if(parentRecipe != null)
                    {
                        parentRecipes.Add(parentRecipe);
                    }
                }
                while (parentRecipe != null);

                processedRecipe.parentRecipes = parentRecipes;
            }

            return processedRecipe;
        }
    }
}
