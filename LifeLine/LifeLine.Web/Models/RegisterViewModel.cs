using LifeLine.DAL.Entites.Enums;
using System.ComponentModel.DataAnnotations;

namespace LifeLine.Web.Models
{
    public class RegisterViewModel
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Surname { get; set; }
        [Required]
        [Phone]
        public string PhoneNumber { get; set; }
        [Required]
        [MinLength(3)]
        public string Username { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [MinLength(8)]
        public string Password { get; set; }
        [Required]
        public BloodType UserBloodType { get; set; }
        [Required]
        public BloodRh UserBloodRh { get; set; }
    }
}
