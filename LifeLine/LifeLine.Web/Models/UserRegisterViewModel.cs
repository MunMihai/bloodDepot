using System.ComponentModel.DataAnnotations;

namespace LifeLine.Web.Models
{
    public class UserRegisterViewModel
    {
        [Required]
        public string Email { get; set; }
        [Required]
        [MinLength(8)]
        public string Password { get; set; }
    }
}
