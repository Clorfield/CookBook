using AutoMapper;
using CookBookBL.Interfaces;
using CookBookDAL.Models;
using CookBookDAL.Repositories;
using System.Collections.Generic;

namespace CookBookBL.BL
{
    public class RecipeBl : IRecipeBl
    {
        private readonly IMapper _mapper;
        private readonly RecipesRepository _recipeRepository;

        public RecipeBl(IMapper mapper)
        {
            _mapper = mapper;
            _recipeRepository = new RecipesRepository(_mapper);
        }

        public int AddRecipe(AddRecipeDto item)
        {
            return _recipeRepository.AddRecipe(item);
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

        public List<RecipeDto> RemoveRecipe(int id)
        {
            var childrenRecipies = _recipeRepository.GetAllChildrenRecipes(id);
            if (childrenRecipies.Count > 0)
            {
                foreach(RecipeDto rec in childrenRecipies)
                {
                    _recipeRepository.RemoveRecipe(rec.id);
                }
            }
            _recipeRepository.RemoveRecipeFromParentsRecipies(id);
            _recipeRepository.RemoveRecipe(id);

            return childrenRecipies;
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
