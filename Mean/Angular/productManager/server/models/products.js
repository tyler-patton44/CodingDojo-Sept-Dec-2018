const mongoose = require('mongoose')

var productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Name field is required'], 
        minlength: [3, "Name must be longer than 3 characters"], 
        maxlength: [200, "Name must be less than 200 characters"]
    },
    price: {
        type: Number,
        required: [true, 'Price field is required'],
        min: [0.01, "Price cannot be less than one cent"]
    },
    image:{
        type: String,
    }

   }, {timestamps: true})

   mongoose.model('products', productSchema);
