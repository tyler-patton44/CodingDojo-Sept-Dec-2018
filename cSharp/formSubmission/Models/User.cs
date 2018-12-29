using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
namespace formSubmission.Models
{

    public class User{
        [Required]
        [Display(Name = "First Name:")]
        [RegularExpression(@"^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")] 
        [MinLength(4)]
        public string firstName{get;set;}

        [Required]
        [Display(Name = "Last Name:")]
        [RegularExpression(@"^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")] 
        [MinLength(4)]
        public string lastName{get;set;}

        [Required]
        [Display(Name = "Age")]
        [Range(1,200)]
        public int age{get;set;}

        [Required]
        [Display(Name = "Email:")]
        [EmailAddress]
        public string email{get;set;}

        [Required]
        [Display(Name = "Password:")]
        [MinLength(8)]
        public string password{get;set;}
        }
    }