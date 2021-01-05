using System.ComponentModel.DataAnnotations;
using Kewpie.Core.Entities;

namespace Kewpie.Models
{
    public class UpdateUserModel
    {
        [Required]
        [MinLength(3)]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }
        
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        
        public Address Address { get; set; }
    }
}