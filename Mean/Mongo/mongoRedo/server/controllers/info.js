const mongoose = require('mongoose');
var Animals = mongoose.model('animals')
mongoose.Promise = global.Promise;


module.exports = {
    index: (req, res)=>{
        Animals.find({}, function(err, name){
            res.render("index", {thing: name});
          }).sort( { createdAt: -1 } )
    },
    //=====================================================
    create: (req, res)=>{
        var animal = new Animals({name: req.body.name, animal: req.body.animal});
        animal.save(function(err) {
            if(err) {
            for(var key in err.errors){
                if(err.errors[key].properties.path === 'name'){
                req.flash('name', err.errors[key].message);
                }
                if(err.errors[key].properties.path === 'animal'){
                req.flash('animal', err.errors[key].message);
                }
            }
            res.redirect('/animal/new');
            } 
            else {
                res.redirect('/');
            }
        })
    },
    //=====================================================
    new: (req, res)=>{
        res.render("createAnimal");
    },
    //=====================================================
    showOne: (req, res)=>{
        Animals.findOne({_id: req.params.id}, function(err, name){
            res.render("profile", {thing: name});
          })
    },
    //=====================================================
    delete: (req, res)=>{
        Animals.remove({_id: req.params.id}, function(){
            res.redirect('/');
          })
    },
    //=====================================================
    edit: (req, res)=>{
        Animals.findOne({_id: req.params.id}, function(err, name){
            res.render("editAnimal", {thing: name});
          })
    },
    //=====================================================
    update: (req, res)=>{
        Animals.findOne({_id: req.params.id}, function(err, user){
            user.name = req.body.name;
            user.animal = req.body.animal;
            user.save(function(err){
              if(err) {
              for(var key in err.errors){
                if(err.errors[key].properties.path === 'name'){
                  req.flash('name', err.errors[key].message);
                }
                if(err.errors[key].properties.path === 'animal'){
                  req.flash('animal', err.errors[key].message);
                }
              }
              res.redirect('/edit/'+req.params.id);
            } 
            else {
              res.redirect('/');
            }
            })
        
          })
    },
    //=====================================================
}
