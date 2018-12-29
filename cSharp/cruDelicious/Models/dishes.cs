using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace cruDelicious.Models
{
    public class dishes
    {
        [Key]
        public int DishesId{get; set;}

        [Required(ErrorMessage = "This field is required")]
        [Display(Name = "Dish Name:")]
        [RegularExpression(@"^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$", ErrorMessage = "Invalid Dish Name")] 
        [MinLength(4, ErrorMessage = "Dish Name must be atleast 4 characters")]
        public string Name{get; set;}

        [Required(ErrorMessage = "This field is required")]
        [Display(Name = "Chef Name:")]
        [RegularExpression(@"^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$", ErrorMessage = "Invalid Chef Name")] 
        [MinLength(4, ErrorMessage = "Chef Name must be atleast 4 characters")]
        public string Chef{get; set;}

        [Required]
        [Display(Name = "Tastiness:")]
        [Range(1,6)]
        public int Tastiness{get; set;}

        [Required(ErrorMessage = "This field is required")]
        [Display(Name = "Number of calories:")]
        [Range(0, Double.PositiveInfinity, ErrorMessage = "Must be greater than 0")]
        public int Calories{get; set;}

        [Required(ErrorMessage = "This field is required")]
        [Display(Name = "Description:")]
        [MinLength(2, ErrorMessage = "Description must be atleast 2 characters")]
        [MaxLength(500, ErrorMessage = "Description must be less than 500 characters")]
        public string Description{get; set;}

        public DateTime CreatedAt{get;set;}
        public DateTime UpdatedAt{get;set;}

        public dishes(){
            CreatedAt = DateTime.Now;
            UpdatedAt = DateTime.Now;
        }
    }
}