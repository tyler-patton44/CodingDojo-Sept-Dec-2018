const mongoose = require('mongoose')
var CommentSchema = new mongoose.Schema({
    Comname: {
        type: String, 
        required: [true, 'Name field is required'], 
        minlength: [2, "Name must be longer than 1 character"], 
        maxlength: [200, "Name must be less than 200"]
    },
    Comcontent: {
        type: String, 
        required: [true, 'Quote field is required'], 
        minLength: [1, "Quote must be above 1"], 
        maxlength: [200, "Quote must be less than 200"]
    },
},{timestamps: true})

var MessageSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'Name field is required'], 
        minlength: [2, "Name must be longer than 1 character"], 
        maxlength: [200, "Name must be less than 200"]
    },
    content: {
        type: String, 
        required: [true, 'Quote field is required'], 
        minLength: [1, "Quote must be above 1"], 
        maxlength: [200, "Quote must be less than 200"]
    },
    comments: [CommentSchema]
},{timestamps: true})


mongoose.model('eMessages', MessageSchema)
mongoose.model('eComments', CommentSchema)
