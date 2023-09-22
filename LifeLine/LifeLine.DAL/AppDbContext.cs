using LifeLine.DAL.Entites;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace LifeLine.DAL
{
    public class AppDbContext : IdentityDbContext<User,UserRole,Guid>
    {
        private readonly string? _connectionString;

        public DbSet<BloodUnit> BloodUnits { get; set; }

        public AppDbContext(string? connectionString)
        {
            if (string.IsNullOrEmpty(connectionString))
                throw new ArgumentNullException(nameof(connectionString));

            _connectionString = connectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder opBuilder)
        {
            opBuilder.UseSqlServer(_connectionString);
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            var adminRole = new UserRole { Name = "Admin", Id = Guid.NewGuid() };
            var userRole = new UserRole { Name = "User", Id = Guid.NewGuid() };

            modelBuilder.Entity<UserRole>().HasData(adminRole, userRole);
        }
    }
}
