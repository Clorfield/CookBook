using AutoMapper;
using CookBookDAL.MockData;
using CookBookDAL.Models;

namespace CookBookDAL.Helpers
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<AddRecipeDto, Recipe>()
                .ForMember("id", opt => opt.MapFrom(r => MockedData.recipes.Count + 1));
            CreateMap<Recipe, RecipeDto>();
            CreateMap<RecipeDto, Recipe>();
        }
    }
}
