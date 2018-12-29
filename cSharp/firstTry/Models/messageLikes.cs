using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace firstTry.Models{
    public class messageLikes{
        [Key]
        public int messageLikeId{get;set;}

        public int userId{get;set;}
        public users user{get;set;}

        public int messageId{get;set;}
        public messages message{get;set;}
    }
}