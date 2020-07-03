using System.Collections.Generic;

namespace CookBookDAL.Models
{
    public class AddRecipeDto
    {
        public string title { get; set; }
        public string shortDescription { get; set; }
        public string description { get; set; }
        public List<IngredientDto> ingredients { get; set; }
    }
}
