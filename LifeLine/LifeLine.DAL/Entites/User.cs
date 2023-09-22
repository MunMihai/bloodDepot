using LifeLine.DAL.Entites.Enums;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore.ChangeTracking.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LifeLine.DAL.Entites
{
    public class User : IdentityUser<Guid>
    {
        public BloodType UserBloodType { get; set; }
        public BloodRh UserBloodRh{ get; set; }
    }
}
