using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace eCommerce.Models
{
    public class products{
        [Key]
        public int productId{get;set;}
        [Required(ErrorMessage = "Name is required")]
        [Display(Name = "Name:")]
        [MinLength(2, ErrorMessage = "Name has to be atleast 2 character")]
        [MaxLength(75, ErrorMessage = "Name cannot be more than 75 character")]
        public string name{get;set;}

        [Required(ErrorMessage = "Description is required")]
        [Display(Name = "Description:")]
        [MinLength(2, ErrorMessage = "Description has to be atleast 2 character")]
        [MaxLength(155, ErrorMessage = "Description cannot be more than 155 character")]
        public string description{get;set;}

        [Display(Name = "Image (url):")]
        public string image{get;set;}

        [Required]
        [Display(Name = "Quanity")]
        public int quanity{get;set;}
        public DateTime createdAt{get;set;}

        public List<orders> orders{get;set;}

        public products(){
            createdAt = DateTime.Now;
        }
    }
}