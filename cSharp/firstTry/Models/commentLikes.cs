using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace firstTry.Models{
    public class commentLikes{
        [Key]
        public int commentLikeId{get;set;}

        public int userId{get;set;}
        public users user{get;set;}

        public int commentId{get;set;}
        public comments comment{get;set;}
    }
}