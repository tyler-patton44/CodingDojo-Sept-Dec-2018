using Microsoft.EntityFrameworkCore;
 
namespace enityTest.Models
{
    public class Context : DbContext
    {
        // base() calls the parent class' constructor passing the "options" parameter along
        public Context(DbContextOptions<Context> options) : base(options) { }
        public DbSet<Person> Users { get; set; }
    }
}