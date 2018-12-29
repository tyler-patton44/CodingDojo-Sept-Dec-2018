const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
var AnimalSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'Name field is required'], 
        minlength: [2, "Name must be longer than 1 character"], 
        maxlength: [200, "Name must be less than 200"]
    },
    animal: {
        type: String, 
        required: [true, 'Animal name is required'], 
        minLength: [1, "Animal name must be above 1"], 
        maxlength: [200, "Animal name must be less than 200"]},
   }, {timestamps: true})
  
mongoose.model('animals', AnimalSchema)
