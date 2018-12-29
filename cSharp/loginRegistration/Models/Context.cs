using Microsoft.EntityFrameworkCore;
 
namespace loginRegistration.Models
{
    public class Context : DbContext
    {
        // base() calls the parent class' constructor passing the "options" parameter along
        public Context(DbContextOptions<Context> options) : base(options) { }
        
        public DbSet<Users> Users { get; set; }
    }
}