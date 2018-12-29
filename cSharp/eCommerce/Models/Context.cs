using Microsoft.EntityFrameworkCore;
 
namespace eCommerce.Models
{
    public class Context : DbContext
    {
        // base() calls the parent class' constructor passing the "options" parameter along
        public Context(DbContextOptions<Context> options) : base(options) { }
        public DbSet<customers> customers { get; set; }
        public DbSet<products> products { get; set; }
        public DbSet<orders> orders { get; set; }
    }
}