using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace chefDishes.Models
{
    public class CurrentDateAttribute : ValidationAttribute
    {
        public CurrentDateAttribute()
        {
        }

        public override bool IsValid(object value)
        {
            var dt = (DateTime)value;
            if(dt <= DateTime.Now)
            {
                return true;
            }
            return false;
        }
    }
    public class chefs
    {
        [Key]
        public int chefId{get;set;}

        [Required(ErrorMessage = "This field is required")]
        [Display(Name = "First Name:")]
        [RegularExpression(@"^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$", ErrorMessage = "Invalid First Name")] 
        [MinLength(2, ErrorMessage = "First Name must be atleast 2 characters")]
        [MaxLength(100, ErrorMessage = "First Name must be less than 100 characters")]
        public string firstName{get;set;}

        [Required(ErrorMessage = "This field is required")]
        [Display(Name = "Last Name:")]
        [RegularExpression(@"^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$", ErrorMessage = "Invalid Last Name")] 
        [MinLength(2, ErrorMessage = "Last Name must be atleast 2 characters")]
        [MaxLength(100, ErrorMessage = "Last Name must be less than 100 characters")]
        public string lastName{get;set;}

        [Required]
        [Display(Name = "Date of birth:")]
        [CurrentDate(ErrorMessage = "Not a real date of birth")]
        public DateTime dob{get;set;}
        public DateTime createdAt{get;set;}
        public DateTime updatedAt{get;set;}

        [NotMapped]
        public int total{get;set;}

        public List<dishes> Dish { get; set; }

        public static int CalculateAge(DateTime dateOfBirth)
        {
            int age = 0;
            age = DateTime.Now.Year - dateOfBirth.Year;
            if (DateTime.Now.DayOfYear < dateOfBirth.DayOfYear)
                age = age - 1;

            return age;
        }

        public chefs(){
            createdAt = DateTime.Now;
            updatedAt = DateTime.Now;
        }

    }
}