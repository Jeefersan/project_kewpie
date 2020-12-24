using Kewpie.Core.Entities.Base;

namespace Kewpie.Core.Entities
{
    public class Order: Entity
    {
        public string UserId { get; set; } = null;
        // public Address Address { get; set; } = null;
        public PaymentStatus PaymentStatus { get; set; }
        public double TotalPrice { get; set; }
    }

    public enum PaymentStatus
    {
        Unpaid  = 1,
        Paid = 2
    }

    public class Address
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmailAddress { get; set; }
        public string PhoneNumber { get; set; }
        public string AddressLine { get; set; }
        public string PostalCode { get; set; }
        public string City { get; set; }
    }
}