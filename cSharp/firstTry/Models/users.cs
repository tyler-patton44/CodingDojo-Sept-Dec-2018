using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace firstTry.Models{
    public class users{
        [Key]
        public int userId{get;set;}

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

        [Required(ErrorMessage = "This field is required")]
        [Display(Name = "Email:")]
        [EmailAddress(ErrorMessage = "Invalid email")]
        [MaxLength(100, ErrorMessage = "Last Name must be atleast 2 characters")]
        public string email{get;set;}

        [Required(ErrorMessage = "This field is required")]
        [Display(Name = "Password:")]
        [DataType(DataType.Password)]
        [MinLength(8, ErrorMessage = "Password must be longer than 8 characters")]
        [MaxLength(255, ErrorMessage = "Password must be less than 255 characters")]
        public string password{get;set;}

        public DateTime createdAt{get;set;}
        public DateTime updatedAt{get;set;}

        [NotMapped]
        [Display(Name = "Confirm Password:")]
        [Compare("password", ErrorMessage = "Password and Confirm do not match")]
        [DataType(DataType.Password)]
        public string confirm {get;set;}

        public int userLevel{get;set;}

        public List<messages> messages{get;set;}
        public List<messageLikes> messageLikes{get;set;}
        public List<commentLikes> commentLikes{get;set;}

        public List<comments> comments{get;set;}
        public users(){
            createdAt = DateTime.Now;
            updatedAt = DateTime.Now;
        }
    }
}