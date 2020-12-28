using Kewpie.Core.Entities;
using Microsoft.AspNetCore.Identity;

namespace Kewpie.Data.Identity
{
    public class ApplicationUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Address Address { get; set; }
        public string RefreshToken { get; set; }
    }
}