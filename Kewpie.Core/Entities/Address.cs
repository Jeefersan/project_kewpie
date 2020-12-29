using Kewpie.Core.Entities.Base;

namespace Kewpie.Core.Entities
{

    public class Address : Entity
    {
        public string AddressLine { get; set; }
        public string PostalCode { get; set; }
        public string City { get; set; }
    }
} 