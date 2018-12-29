using Microsoft.EntityFrameworkCore;
 
namespace ProdCat.Models
{
    public class Context : DbContext
    {
        // base() calls the parent class' constructor passing the "options" parameter along
        public Context(DbContextOptions<Context> options) : base(options) { }
        public DbSet<categories> categories { get; set; }
        public DbSet<products> products { get; set; }
        public DbSet<associations> associations { get; set; }
    }
}