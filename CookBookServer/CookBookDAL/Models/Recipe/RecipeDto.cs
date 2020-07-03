using System.Collections.Generic;

namespace CookBookDAL.Models
{
    public class RecipeDto : RecipeMain
    {
        public int fatherRecipeId { get; set; }
        public List<Recipe> childrenRecipies { get; set; }
    }
}
