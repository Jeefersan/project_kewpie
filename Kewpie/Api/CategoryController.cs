using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Kewpie.Core.Entities;
using Kewpie.Core.Interfaces;
using Kewpie.Data;
using Microsoft.AspNetCore.Mvc;

namespace Kewpie.Api
{
    [Route("api/[controller]")]
    public class CategoryController : ApiController
    {
        private readonly ICategoryRepository _categoryRepository;


        public CategoryController(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }

        [HttpGet]
        public async Task<ActionResult<List<Category>>> GetCategories()
        {
            var categories = await _categoryRepository.GetAllAsync();
            return categories.ToList();
        }
    }
}