using IdentityServer4.EntityFramework.Options;
using Kewpie.Core.Entities;
using Kewpie.Data.Identity;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace Kewpie.Data
{
    public class AppDbContext : IdentityDbContext<ApplicationUser>
    {
        public AppDbContext(
            DbContextOptions<AppDbContext> options
        ) : base(options)
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