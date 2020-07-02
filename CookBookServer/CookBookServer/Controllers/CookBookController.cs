﻿using AutoMapper;
using CookBookBL.BL;
using CookBookDAL.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;

namespace CookBookServer.Controllers
{
    [Route("api/CookBook")]
    public class CookBookController : ControllerBase
    {
        private readonly ILogger<CookBookController> _logger;
        private readonly IMapper _mapper;
        private readonly RecipeBl _recipeBl;

        public CookBookController(ILogger<CookBookController> logger, IMapper mapper)
        {
            _mapper = mapper;
            _logger = logger;
            _recipeBl = new RecipeBl(_mapper);
        }

        [HttpGet]
        public List<RecipeDto> Get()
        {
            return _recipeBl.GetRecipes();
        }

        [HttpGet("GetRecipe/{recipeId}")]
        public RecipeDto GetRecipe([FromRoute] int recipeId)
        {
            return _recipeBl.FindRecipeById(recipeId);
        }
    }
}