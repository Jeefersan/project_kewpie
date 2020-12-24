using System.Collections.Generic;
using System.Threading.Tasks;
using Kewpie.Core.Entities;
using Kewpie.Core.Interfaces;
using Kewpie.Data.Repositories.Base;
using Microsoft.EntityFrameworkCore;

namespace Kewpie.Data.Repositories
{
    public class CategoryRepository : AsyncRepository<Category>, ICategoryRepository
    {
        private readonly AppDbContext _dbContext;

        public CategoryRepository(AppDbContext dbContext) : base(dbContext)
        {
            _dbContext = dbContext;
        }

        public override async Task<IReadOnlyList<Category>> GetAllAsync()
        {
            var categories = await _dbContext.Categories
                .Include(c => c.ShopItems)
                .ToListAsync();
            return categories;
        }
    }
}