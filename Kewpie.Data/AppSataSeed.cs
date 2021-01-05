using System.Collections.Generic;
using System.Threading.Tasks;
using Kewpie.Core.Entities;
using Kewpie.Data.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Kewpie.Data
{
    public static class AppSataSeed
    {
        public static void InitializeSeed(ModelBuilder builder)
        {
            builder.Entity<Category>()
                .HasMany(c => c.ShopItems)
                .WithOne(s => s.Category);

            builder.Entity<Category>().HasData(Categories());

            builder.Entity<ShopItem>()
                .HasOne(s => s.Category)
                .WithMany(c => c.ShopItems)
                .HasForeignKey(s => s.CategoryId);

            builder.Entity<ShopItem>().HasData(ShopItems());
            
            var hasher = new PasswordHasher<ApplicationUser>();
            builder.Entity<ApplicationUser>().HasData(new ApplicationUser
            {
                UserName = "test@gmail.com",
                Email = "test@gmail.com",
                PasswordHash = hasher.HashPassword(null, "password"),
                SecurityStamp = ""
            });
        }

        private static List<Category> Categories()
        {
            return new List<Category>
            {
                new Category
                {
                    Title = "Nigiri",
                    Id = 1
                },
                new Category
                {
                    Title = "Special Sushi Rolls",
                    Id = 2
                },
                new Category
                {
                    Title = "Special Sushi Rolls",
                    Id = 3
                },
                new Category
                {
                    Title = "Sushi Mix",
                    Id = 4
                },
            };
        }

        private static List<ShopItem> ShopItems()
        {
            return new List<ShopItem>
            {
                new ShopItem
                {
                    Id = 1,
                    Name = "Sake nigiri",
                    Description = "Our go-to salmon nigiri",
                    Pieces = 4,
                    Price = 4,
                    CategoryId = 1,
                },
                new ShopItem
                {
                    Id = 2,
                    Name = "Toro nigiri",
                    Description = "Delicious nigiri made with the belly-part of the bluefin tuna",
                    Pieces = 1,
                    Price = 8.5,
                    CategoryId = 1
                },
                new ShopItem
                {
                    Id = 3,
                    Name = "Ebi nigiri",
                    Description = "Our king-size prawn nigiri",
                    Pieces = 1,
                    Price = 4.5,
                    CategoryId = 1,
                },
                new ShopItem
                {
                    Id = 4,
                    Name = "Special California Roll",
                    Description = "This is our recommended special roll. It's just amazing. Try it!",
                    Pieces = 8,
                    Price = 25,
                    CategoryId = 2
                },
                new ShopItem
                {
                    Id = 5,
                    Name = "Special California Roll",
                    Description = "This is our recommended special roll. It's just amazing. Try it!",
                    Pieces = 8,
                    Price = 25,
                    CategoryId = 2
                },
                new ShopItem
                {
                    Id = 6,
                    Name = "Special California Roll",
                    Description = "This is our recommended special roll. It's just amazing. Try it!",
                    Pieces = 8,
                    Price = 25,
                    CategoryId = 2
                },
                new ShopItem
                {
                    Id = 7,
                    Name = "Salmon Mix",
                    Description = "This is our recommended special roll. It's just amazing. Try it!",
                    Pieces = 8,
                    Price = 25,
                    CategoryId = 3
                },
                new ShopItem
                {
                    Id = 8,
                    Name = "Catch of the Day Mix",
                    Description =
                        "Fresh caught, straight from the ocean. Includes six pieces of Toro sushi, also known as the Bluefin Tuna.",
                    Pieces = 8,
                    Price = 32,
                    CategoryId = 3
                },
                new ShopItem
                {
                    Id = 9,
                    Name = "Kids Duo Mix",
                    Description = "Kids love sushi too! Great for two.",
                    Pieces = 20,
                    Price = 25,
                    CategoryId = 3
                },
                
                new ShopItem
                {
                    Id = 10,
                    Name = "Vega Only Mix",
                    Description = "Kids love sushi too! Great for two.",
                    Pieces = 20,
                    Price = 25,
                    CategoryId = 3
                },
                new ShopItem
                {
                    Id = 11,
                    Name = "Salmon Sashimi Only",
                    Description = "For the real salmon sashimi lovers. Try it!",
                    Pieces = 12,
                    Price = 28,
                    CategoryId = 4
                },
                new ShopItem
                {
                    Id = 12,
                    Name = "Sashimi Party Boat",
                    Description = "Impress your friends or family with this amazing sashimi boat",
                    Pieces = 64,
                    Price = 109,
                    CategoryId = 4
                }
            };
        }


    }
}