using System;
using System.Collections;
using System.Collections.Generic;
using Kewpie.Core.Entities.Base;

namespace Kewpie.Core.Entities
{
    public class Category : Entity
    {
        public string Title { get; set; }
        public IEnumerable<ShopItem> ShopItems { get; set; }
        
    }
}