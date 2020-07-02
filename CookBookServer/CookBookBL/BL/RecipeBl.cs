﻿using AutoMapper;
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

        public RecipeDto FindRecipeById(int id)
        {
            return _recipeRepository.FindRecipeById(id);
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
    }
}