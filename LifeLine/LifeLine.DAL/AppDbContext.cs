using LifeLine.DAL.Entites;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LifeLine.DAL
{
    public class AppDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<BloodUnit> BloodUnits { get; set; }

        public AppDbContext(DbContextOptions options) : base(options)
        {
        }
    }
}
