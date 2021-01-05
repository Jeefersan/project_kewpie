using System.ComponentModel.DataAnnotations;

namespace Kewpie.Models
{
    public class RegisterModel
    {
        [Required] [MinLength(3)] public string FirstName { get; set; }

        [Required] public string LastName { get; set; }

        [EmailAddress]
        [MinLength(8)]
        [Required(ErrorMessage = "Email is required")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required!")]
        [MinLength(6)]
        public string Password { get; set; }
    }
}