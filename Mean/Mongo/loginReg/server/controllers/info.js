const mongoose = require('mongoose');
var User = mongoose.model('User');

var bcrypt = require('bcrypt');


module.exports = {
    index: (req, res)=>{
        res.render('index');
    },
    logout: (req, res)=>{
        req.session.destroy();
        res.redirect('/');
    },
    //=====================================================
    register: (req, res)=>{
        if(req.body.confirm != req.body.password){
            req.flash('confirm', "Password and confirm do not match");
            res.redirect('/');
        }
        User.find({email: req.body.email}, function(err, user){
            if(user.length > 0){
                req.flash("email","Email is already in use");
                res.redirect('/');
            }
            else{
                var user = new User({firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, password: req.body.password});

                user.save(function(err){
                    if(err){
                        for(var key in err.errors){
                            if(err.errors[key].properties.path === 'firstName'){
                                req.flash('firstName', err.errors[key].message);
                            }
                            if(err.errors[key].properties.path === 'lastName'){
                                req.flash('lastName', err.errors[key].message);
                            }
                            if(err.errors[key].properties.path === 'email'){
                                req.flash('email', err.errors[key].message);
                            }
                            if(err.errors[key].properties.path === 'password'){
                                req.flash('password', err.errors[key].message);
                            }
                        }
                        res.redirect('/');
                    }
                    else{
                        bcrypt.hash(req.body.password, 10)
                        .then(hashed_password => {
                            user.password = hashed_password;
                            user.save();
                        })
                        .catch(error => {
        
                        });
                        User.create(user, function (err, user) {
                        req.session.UserId = user._id;
                        res.redirect('/users');
                    })
                    }
                })
            }
        })
    },
    //=====================================================
    login: (req, res)=>{
        User.findOne({email: req.body.loginEmail}, function(err, user){
            if(! user){
                req.flash("loginEmail","Email not found");
                res.redirect('/');
            }
            else{
                bcrypt.compare(req.body.loginPassword, user.password)
                    .then(result => {
                        if (result == true) {
                            req.session.UserId = user._id;
                            res.redirect('/users')
                        }
                        else{
                            req.flash("loginPassword", "Password incorrect");
                            res.redirect("/");
                        }
                    })
                    .catch(error => {
                        req.flash("loginPassword", "Password incorrect");
                        res.redirect("/");
                    })
            }
        })
    },
    //=====================================================
    show: (req, res)=>{
        if(req.session.UserId == undefined){
            res.redirect('/');
        }
        User.find({_id: req.session.UserId}, function(err, user){
            res.render('users', {pip: user});
        })
    }
}
