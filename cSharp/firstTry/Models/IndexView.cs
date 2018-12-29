using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace firstTry.Models{
    public class IndexView{
        public users user{get;set;}
        public List<users> allUsers = new List<users>();

        public messages message{get;set;}
        public List<messages> messages = new List<messages>();


        public comments comment{get;set;}
        public List<comments> comments = new List<comments>();

    }
}