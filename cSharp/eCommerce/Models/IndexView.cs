using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace eCommerce.Models
{
    public class IndexView{
        public orders order{get;set;}
        public List<orders> orders{get;set;}

        public customers customer{get;set;}
        public List<customers> customers{get;set;}

        public products product{get;set;}  
        public List<products> products{get;set;}
    }
}