using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProdCat.Models
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
        [Required(ErrorMessage = "Price is required")]
        [Display(Name = "Price:")]
        [Range(0, Double.PositiveInfinity, ErrorMessage = "Price must be greater than 0")]

        public decimal price{get;set;}
        public DateTime createdAt{get;set;}
        public List<associations> allAssociations{get;set;}

        public products(){
            allAssociations = new List<associations>();
            createdAt = DateTime.Now;
        }
    }
}