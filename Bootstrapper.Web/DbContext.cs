using System.Data.Entity;

using Microsoft.AspNet.Identity.EntityFramework;

namespace Bootstrapper.Web
{
    public class DbContext : IdentityDbContext<IdentityUser>
    {
        public DbContext()
            : base("Bootstrapper")
        {
        }

        public static DbContext Create()
        {
            return new DbContext();
        }


        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<IdentityUser>().ToTable("Users");
            modelBuilder.Entity<IdentityRole>().ToTable("Roles");
            modelBuilder.Entity<IdentityUserRole>().ToTable("UserRoles");
            modelBuilder.Entity<IdentityUserLogin>().ToTable("UserLogins");
            modelBuilder.Entity<IdentityUserClaim>().ToTable("UserClaims");
        }
    }
}