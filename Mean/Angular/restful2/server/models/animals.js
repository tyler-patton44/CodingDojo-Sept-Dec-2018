const mongoose = require('mongoose')

var AnimalSchema = new mongoose.Schema({
    name: {
        type: String, 
    },

    animal: {
        type: String, 
    },
   }, {timestamps: true})

   mongoose.model('animals', AnimalSchema);