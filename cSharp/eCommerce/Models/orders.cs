using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace eCommerce.Models
{
    public class orders{
        [Key]
        public int orderId{get;set;}

        [Required]
        [Display(Name = "Quanity:")]
        public int quanity{get;set;}

        [Required]
        [Display(Name = "Name:")]
        public int customerId{get;set;}
        public customers customer{get;set;}

        [Required]
        [Display(Name = "Product:")]
        public int productId{get;set;}
        public products product{get;set;}

        public DateTime createdAt{get;set;}

        

        public orders(){
            createdAt = DateTime.Now;
        }  
    }
}