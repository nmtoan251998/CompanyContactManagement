using Microsoft.EntityFrameworkCore;

namespace CompanyContactManagment.Models
{
    public class CompanyContactContext : DbContext
    {
        public CompanyContactContext() { }

        public CompanyContactContext(DbContextOptions options) : base(options) { }

        public virtual DbSet<DepartmentModel> Departments { get; set; }
        public virtual DbSet<CompanyModel> Companies { get; set; }
        public virtual DbSet<UserModel> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<DepartmentModel>().ToTable("Departments");
            modelBuilder.Entity<CompanyModel>().ToTable("Companies");
            modelBuilder.Entity<UserModel>().ToTable("Users");
        }
    }
}
