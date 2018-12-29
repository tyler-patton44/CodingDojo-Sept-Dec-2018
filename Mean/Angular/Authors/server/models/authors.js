const mongoose = require('mongoose')

var QuoteSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, 'Quote field is required'], 
        minlength: [3, "Quote must be longer than 3 characters"], 
        maxlength: [100, "Quote must be less than 100 characters"]
    },
    votes: {
        type: Number,
        default: 0
    }

   }, {timestamps: true})

var AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name field is required'], 
        minlength: [3, "Name must be longer than 3 characters"], 
        maxlength: [200, "Name must be less than 200 characters"]
    },
    quotes: [{
        content: {
            type:String
        },
        votes: {
            type: Number,
            default: 0
        }

    }]

   }, {timestamps: true})

   mongoose.model('authors', AuthorSchema);
   mongoose.model('quotes', QuoteSchema);
