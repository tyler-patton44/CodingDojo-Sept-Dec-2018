using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
namespace quotingDojo.Models
{
    public class Quotes
    {
        [Required]
        [Display(Name = "Name:")]
        [MinLength(4)]
        [MaxLength(75)]
        [RegularExpression(@"^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")]
        public string name{get; set;}

        [Required]
        [Display(Name = "Your Quote:")]
        [MinLength(4)]
        [MaxLength(75)]
        public string content{get; set;}
    }
}