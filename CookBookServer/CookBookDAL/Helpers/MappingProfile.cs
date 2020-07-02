using AutoMapper;
using CookBookDAL.MockData;
using CookBookDAL.Models;
using System.Collections.Generic;
using System.Linq;

namespace CookBookDAL.Helpers
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<AddRecipeDto, Recipe>()
                .ForMember("id", opt => opt.MapFrom(r => MockedData.recipes.Last().id + 1));
            CreateMap<Recipe, RecipeDto>();
            CreateMap<RecipeDto, Recipe>();
            CreateMap<RecipeDto, RecipeDetails>();
        }
    }
}
