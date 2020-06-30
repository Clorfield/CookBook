using CookBookDAL.Interfaces;
using CookBookDAL.MockData;
using CookBookDAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;

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
    }
}
