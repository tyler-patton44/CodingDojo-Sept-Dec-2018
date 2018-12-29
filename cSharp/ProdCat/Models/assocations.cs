using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProdCat.Models
{
    public class associations{
        [Key]
        public int associationId{get;set;}

        [Required]
        public int categoryId{get;set;}
        public categories category{get;set;}

        [Required]
        public int productId{get;set;}
        public products product{get;set;}  
    }
}