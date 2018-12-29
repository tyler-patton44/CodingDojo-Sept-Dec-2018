using Microsoft.EntityFrameworkCore;
 
namespace firstTry.Models
{
    public class Context : DbContext
    {
        // base() calls the parent class' constructor passing the "options" parameter along
        public Context(DbContextOptions<Context> options) : base(options) { }
        public DbSet<users> users { get; set; }
        public DbSet<messages> messages { get; set; }
        public DbSet<messageLikes> messageLikes { get; set; }
        public DbSet<comments> comments { get; set; }
        public DbSet<commentLikes> commentLikes { get; set; }
    }
}