using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace eCommerce.Models
{
    public class customers{
        [Key]
        public int customerId{get;set;}

        [Required]
        [MinLength(2, ErrorMessage = "Name has to be longer than 1 character")]
        [MaxLength(150, ErrorMessage = "Name cannot be longer than 150 charcters")]
        public string name{get;set;}

        public DateTime createdAt{get;set;}

        public customers(){
            createdAt = DateTime.Now;
        }
        
    }
}