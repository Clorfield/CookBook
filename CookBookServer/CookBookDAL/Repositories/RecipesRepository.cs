using AutoMapper;
using CookBookDAL.Interfaces;
using CookBookDAL.MockData;
using CookBookDAL.Models;
using System.Collections.Generic;
using System.Linq;

namespace CookBookDAL.Repositories
{
    public class RecipesRepository : IRecipesRepository
    {
        private readonly IMapper _mapper;
        public RecipesRepository(IMapper mapper)
        {
            _mapper = mapper;
        }

        public void AddRecipe(AddRecipeDto item)
        {
            Recipe recipe = _mapper.Map<Recipe>(item);
            MockedData.recipes.Add(recipe);
        }

        public RecipeDto FindRecipeById(int id)
        {
            var recipe = MockedData.recipes.Find(r => r.id == id);
            return _mapper.Map<RecipeDto>(recipe);
        }

        public List<RecipeDto> GetRecipes()
        {
            return _mapper.Map<List<RecipeDto>>(MockedData.recipes);
        }

        public void RemoveRecipe(int id)
        {
            MockedData.recipes.Remove(MockedData.recipes.Where(r => r.id == id).First());
        }

        public void UpdateRecipe(RecipeDto item)
        {
            var itemIndex = MockedData.recipes.FindIndex(r => r.id == item.id);
            MockedData.recipes[itemIndex] = _mapper.Map<Recipe>(item);
        }

        public List<RecipeDto> GetAllChildrenRecipes(int id)
        {
            var recipe = MockedData.recipes.Find(r => r.id == id);
            List<Recipe> children = new List<Recipe>();
            GetChildrenNodes(children, recipe);

            return _mapper.Map<List<RecipeDto>>(children);
        }

        public void GetChildrenNodes(List<Recipe> children, Recipe recipe)
        {
            if (recipe.childrenRecipies != null)
            {
                foreach (Recipe rec in recipe.childrenRecipies)
                {
                    children.Add(rec);
                    GetChildrenNodes(children, rec);
                }
            }
        }

        public void RemoveRecipeFromParentsRecipies(int id)
        {
            var recipe = MockedData.recipes.Find(r => r.id == id);
            if (recipe.fatherRecipeId != 0)
            {
                for(int i = 0; i < MockedData.recipes.Count; i++)
                {
                    if (MockedData.recipes[i].id == recipe.fatherRecipeId)
                    {
                        MockedData.recipes[i].childrenRecipies = MockedData.recipes[i].childrenRecipies.Where(r => r.id != id).ToList();
                    }
                }
            }
        }
    }
}
