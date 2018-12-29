using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace firstTry.Models{
    public class  messages{
        [Key]
        public int messageId{get;set;}

        [Required(ErrorMessage = "This field is required")]
        [Display(Name = "Post a message:")]
        [MinLength(2, ErrorMessage = "Has to be longer than 2 charcters")]
        [MaxLength(255, ErrorMessage = "Has to be shorter than 255 charcters")]
        public string message{get;set;}

        public DateTime createdAt{get;set;}
        public DateTime updatedAt{get;set;}

        public int userId{get;set;}

        public users user{get;set;}

        public List<messageLikes> messageLikes{get;set;}
        public List<comments> comments{get;set;}

        public messages(){
            createdAt = DateTime.Now;
            updatedAt = DateTime.Now;
        }

    }
}