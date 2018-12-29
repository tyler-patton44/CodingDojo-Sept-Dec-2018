using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace chefDishes.Models
{
    public class dishes
    {
        [Key]
        public int dishId{get; set;}

        [Required(ErrorMessage = "This field is required")]
        [Display(Name = "Dish Name:")]
        [RegularExpression(@"^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$", ErrorMessage = "Invalid Dish Name")] 
        [MinLength(4, ErrorMessage = "Dish Name must be atleast 4 characters")]
        public string name{get; set;}


        [Required]
        [Display(Name = "Tastiness:")]
        [Range(1,6)]
        public int tastiness{get; set;}

        [Required(ErrorMessage = "This field is required")]
        [Display(Name = "Number of calories:")]
        [Range(0, Double.PositiveInfinity, ErrorMessage = "Must be greater than 0")]
        public int calories{get; set;}

        [Required(ErrorMessage = "This field is required")]
        [Display(Name = "Description:")]
        [MinLength(2, ErrorMessage = "Description must be atleast 2 characters")]
        [MaxLength(255, ErrorMessage = "Description must be less than 255 characters")]
        public string description{get; set;}

        public DateTime createdAt{get;set;}
        public DateTime updatedAt{get;set;}

        public int chefId{get;set;}
        public chefs chef{get;set;}

        public dishes(){
            createdAt = DateTime.Now;
            updatedAt = DateTime.Now;
        }
    }
}