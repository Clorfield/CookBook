using CookBookDAL.Models;
using System.Collections.Generic;

namespace CookBookDAL.MockData
{
    static public class MockedData
    {
        static public List<Recipe> recipes = new List<Recipe>() { 
            new Recipe() {
                id = 1,
                title = "BestDelishesRecipe",
                shortDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 
                description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et volutpat tellus. Morbi urna nisi, laoreet at libero sit amet, maximus malesuada turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean at risus quis magna condimentum dapibus. Phasellus ut varius nulla. Fusce vehicula massa sit amet vulputate ultrices. Morbi tristique sapien eget erat tempus egestas.",
                ingredients = new List<IngredientDto>() { new IngredientDto() { title = "Apple", amount = 2 }, new IngredientDto() { title = "Egg", amount = 6 }, new IngredientDto() { title = "Cheese", amount = 25 } } },
            new Recipe() {
                id = 2,
                title = "MmmmThatsWhatYouWant", 
                shortDescription = "Cras ut leo eu felis sagittis dictum id vitae erat. Aliquam scelerisque luctus pharetra.", 
                description = "Cras ut leo eu felis sagittis dictum id vitae erat. Aliquam scelerisque luctus pharetra. Maecenas dapibus turpis nulla, quis eleifend purus congue vel. Maecenas fringilla orci congue orci aliquet sollicitudin. Aenean non sollicitudin arcu. Praesent at tristique nulla, nec euismod elit. Nam ac massa elementum, malesuada nulla ultricies, placerat ligula.", 
                ingredients = new List<IngredientDto>() { new IngredientDto() { title = "Macarony", amount = 7 }, new IngredientDto() { title = "Tushonka", amount = 2 }, new IngredientDto() { title = "Cheese", amount = 13 } } },
            new Recipe() {
                id = 3,
                title = "HahahaYouWillEatThis?", 
                shortDescription = "Maecenas fringilla orci congue orci aliquet sollicitudin.", 
                description = "Cras aliquam nunc dolor, non elementum lectus dictum id. Duis quis diam nec metus consequat consequat. Sed semper lectus lectus, quis molestie mauris ornare sit amet. Vivamus rhoncus, dolor vitae efficitur faucibus, nibh ipsum auctor neque, eu consectetur nibh felis ac sem. Ut tempor consequat mauris eu vehicula. Mauris et sem turpis. ", 
                ingredients = new List<IngredientDto>() { new IngredientDto() { title = "Eggs", amount = 22 }, new IngredientDto() { title = "Tree", amount = 12 }, new IngredientDto() { title = "Smile", amount = 9001 } } },
            new Recipe() {
                id = 4,
                title = "Nice", 
                shortDescription = "Aenean non sollicitudin arcu.", 
                description = "Aenean sollicitudin, diam in aliquet vehicula, orci risus semper odio, eu elementum eros nunc in massa. Vivamus quis posuere justo, sed elementum nunc. Nunc ullamcorper bibendum tortor, in elementum quam pharetra sit amet. Quisque sed diam fermentum, convallis massa vel, eleifend nunc. Cras sed lacus ac dui blandit tempor. In condimentum orci a libero faucibus semper. Aliquam vestibulum eget nisi a pharetra. Nam in est nunc.", 
                ingredients = new List<IngredientDto>() { new IngredientDto() { title = "Meat", amount = 70 }, new IngredientDto() { title = "Chicken", amount = 21 }, new IngredientDto() { title = "Cheese", amount = 1 } } },
            new Recipe() {
                id = 5,
                title = "ReallyGood", 
                shortDescription = "Curabitur mollis turpis ac congue convallis.", 
                description = "Proin quis tincidunt enim, semper aliquet dui. Nam blandit sapien vel eros euismod imperdiet. Cras fringilla tortor a ligula commodo, faucibus sagittis est hendrerit. Aenean vitae venenatis ante. Suspendisse potenti. Suspendisse vehicula risus in sapien scelerisque, in tincidunt purus suscipit. Etiam volutpat tempor nisl, vel luctus nulla aliquam in. Etiam dictum vitae est sed pretium. Phasellus id lectus vel ligula consectetur rhoncus ut ut nibh. Etiam feugiat a ligula et elementum. Donec eget leo euismod, auctor nisi sit amet, rhoncus mi. Proin sodales vitae elit vel varius. In hac habitasse platea dictumst.",
                ingredients = new List<IngredientDto>() { new IngredientDto() { title = "Pasta", amount = 14 }, new IngredientDto() { title = "Tomato", amount = 2 }, new IngredientDto() { title = "Cheese", amount = 13 } } },
        };
    }
}
