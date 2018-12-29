const mongoose = require('mongoose')

var User = new mongoose.Schema({
    firstName: {
        type: String, 
        required: [true, 'First name field is required'], 
        minlength: [2, "First name must be longer than 2 character"], 
        maxlength: [200, "First name must be less than 200 character"]
    },
    lastName: {
        type: String, 
        required: [true, 'Last name field is required'], 
        minLength: [2, "Last name must be longer than 2 character"], 
        maxlength: [200, "Last name must be less than 200 character"]
    },
    email: {
        type: String,
        required: [true, 'Email field is required'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: [true, 'Password field is required'],
        minlength: [8, "Password must be longer than 8 character"],
        maxlength: [200, "Password must be less than 200 character"]
    },
},{timestamps: true})

var UserLogin = new mongoose.Schema({
    loginEmail: {
        type: String,
        required: [true, 'Email field is required'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    loginPassword: {
        type: String,
        required: [true, 'Password field is required'],
        minlength: [8, "Password must be longer than 1 character"],
        maxlength: [200, "Password must be less than 200 character"]
    },
})

mongoose.model('User', User);