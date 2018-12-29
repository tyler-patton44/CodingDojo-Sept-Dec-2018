using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProdCat.Models
{
    public class categories{
        [Key]
        public int categoryId{get;set;}
        
        [Required(ErrorMessage = "Name is required")]
        [Display(Name = "Name:")]
        [MinLength(2, ErrorMessage = "Name has to be atleast 2 character")]
        [MaxLength(75, ErrorMessage = "Name cannot be more than 75 character")]
        public string name{get;set;}
        public DateTime createdAt{get;set;}
        public List<associations> allAssociations{get;set;}
        public categories(){
            allAssociations = new List<associations>();
            createdAt = DateTime.Now;
        }
    }
}