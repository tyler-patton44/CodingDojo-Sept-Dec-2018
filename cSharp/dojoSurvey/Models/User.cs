using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
namespace dojoSurvey.Models
{

    public class User{
        [Required]
        [Display(Name = "Name:")]
        [MinLength(2)]
        [RegularExpression(@"^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")] 
        public string fullName{get;set;}

        [Required]
        [Display(Name = "Location:")]
        public string location{get;set;}

        [Required]
        [Display(Name = "Favorite Language:")]
        public string language{get;set;}

        [Display(Name = "Comment (opptional):")]
        [MaxLength(20)]
        public string comment{get;set;}
        }
    }