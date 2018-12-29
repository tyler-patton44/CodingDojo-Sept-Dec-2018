using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace firstTry.Models{
    public class  comments{
        [Key]
        public int commentId{get;set;}

        [Required(ErrorMessage = "This field is required")]
        [Display(Name = "Comment:")]
        [MaxLength(255, ErrorMessage = "Has to be shorter than 255 charcters")]
        public string comment{get;set;}

        public DateTime createdAt{get;set;}
        public DateTime updatedAt{get;set;}

        public int userId{get;set;}
        public users user{get;set;}

        public int messageId{get;set;}

        public List<commentLikes> commentLikes{get;set;}

        public comments(){
            createdAt = DateTime.Now;
            updatedAt = DateTime.Now;
        }

    }
}