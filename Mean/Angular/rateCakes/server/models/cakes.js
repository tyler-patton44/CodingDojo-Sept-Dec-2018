const mongoose = require('mongoose')

var CommentSchema = new mongoose.Schema({
    ratings:{ 
        type: Number,
    },
    comment: {
        type: String,
    },
   }, {timestamps: true})

var CakeSchema = new mongoose.Schema({
    baker: {
        type: String, 
    },
    
    image: {
        type: String,
    },
    comments: [CommentSchema],

   }, {timestamps: true})

   mongoose.model('cakes', CakeSchema);
   mongoose.model('comments', CommentSchema);