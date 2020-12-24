using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Kewpie.Core.Entities;
using Kewpie.Core.Interfaces;
using Kewpie.Data.Repositories.Base;

namespace Kewpie.Data.Repositories
{
    public class OrderRepository : AsyncRepository<Order>, IOrderRepository
    {
        public OrderRepository(AppDbContext dbContext) : base(dbContext)
        {
        }
    }
}