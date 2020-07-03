using System.Collections.Generic;

namespace CookBookDAL.Models
{
    public class RecipeDetails : RecipeMain
    {
        public List<RecipeDto> parentRecipes { get; set; }
    }
}
