using System.ComponentModel.DataAnnotations;
using System;
namespace enityTest.Models
{
    public class Person
    {
        // auto-implemented properties need to match columns in your table
        [Key]
        public int PersonId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int Age { get; set; }
    }
}