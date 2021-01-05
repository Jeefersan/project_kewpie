using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Kewpie.Core.Entities.Base;

namespace Kewpie.Core.Interfaces.Base
{
    public interface IAsyncRepository<T> where T: Entity
    {
        Task<T> AddAsync(T entity);
        
        Task<T> GetByIdAsync(int id);
        
        Task<IReadOnlyList<T>> GetAllAsync();
        
        Task UpdateAsync(T entity);
        
        Task DeleteByIdAsync(int id);
        
    }
}