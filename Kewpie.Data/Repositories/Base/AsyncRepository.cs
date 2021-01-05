using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Kewpie.Core.Entities.Base;
using Kewpie.Core.Interfaces.Base;
using Microsoft.EntityFrameworkCore;

namespace Kewpie.Data.Repositories.Base
{
    public abstract class AsyncRepository<T> : IAsyncRepository<T> where T : Entity
    {
        private readonly AppDbContext _dbContext;

        protected AsyncRepository(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        
        public async Task<T> AddAsync(T entity)
        {
            await _dbContext.Set<T>().AddAsync(entity);
            await _dbContext.SaveChangesAsync();
            return entity;
        }

        public async Task<T> GetByIdAsync(int id)
        {
            return await _dbContext.Set<T>().FindAsync(id);
        }

        public virtual async Task<IReadOnlyList<T>> GetAllAsync()
        {
            return await _dbContext.Set<T>().ToListAsync();
        }

        public async Task UpdateAsync(T entity)
        {
            _dbContext.Set<T>().Update(entity);
            await _dbContext.SaveChangesAsync();
        }

        public async Task DeleteByIdAsync(int id)
        {
            _dbContext.Set<T>().Remove(await GetByIdAsync(id));
            await _dbContext.SaveChangesAsync();
        }
    }
}