using IdentityServer4.EntityFramework.Options;
using Kewpie.Core.Entities;
using Kewpie.Data.Identity;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace Kewpie.Data
{
    public class AppDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public AppDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
          
            AppSataSeed.InitializeSeed(builder);
        }

        public DbSet<Order> Orders { get; set; }
        public DbSet<Category> Categories { get; set; }
    }
}