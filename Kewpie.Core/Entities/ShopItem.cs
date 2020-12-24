using Kewpie.Core.Entities.Base;

namespace Kewpie.Core.Entities
{
    public class ShopItem : Entity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public int Pieces { get; set; }
        public string ImageUrl { get; set; }
        
        public int CategoryId { get; set; }
        public Category Category { get; set; }
    }
}