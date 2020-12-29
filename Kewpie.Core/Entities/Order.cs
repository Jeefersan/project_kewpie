using Kewpie.Core.Entities.Base;

namespace Kewpie.Core.Entities
{
    public class Order : Entity
    {
        public string UserId { get; set; } = null;
        public Address Address { get; set; }
        public PaymentStatus PaymentStatus { get; set; }
        public double TotalPrice { get; set; }
    }

    public enum PaymentStatus
    {
        Unpaid = 1,
        Paid = 2
    }
}