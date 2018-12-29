const mongoose = require('mongoose');
var Animals = mongoose.model('animals')


module.exports = {
    create: (req, res)=>{
        Animals.create({name: req.body.name, animal: req.body.animal}, function(err) {
            console.log(req.body);
            if(err) {
                console.log(err);
                res.json({message: "Error", error: err})
                }
            else {
                   res.redirect('/tasks');
                }
        });
      },
    index: (req, res)=>{
        Animals.find({}, function(err, animals){
            if(err){
               console.log("Returned error", err);
                // respond with JSON
               res.json({message: "Error", error: err})
            }
            else {
                // respond with JSON
               res.json({data: animals})
            }
         })
      },
      getID: (req, res)=>{
        Animals.findOne({_id: req.params.id}, function(err, animals){
            if(err){
               console.log("Returned error", err);
                // respond with JSON
               res.json({message: "Error", error: err})
            }
            else {
                // respond with JSON
               res.json({data: animals})
            }
         })
      },
      updator: (req, res)=>{
        Animals.findOne({_id: req.params.id}, function(err, user){
            user.name = req.body.name;
            user.animal = req.body.animal;
            user.save(function(err){
                if(err){
                    res.json({status: false, data: err})
                }
                else{
                    res.json({status: true})
                }
            })
        
          })
      },

      deletor: (req, res)=>{
        Animals.remove({_id: req.params.id}, function(err){
            if(err){
                res.json({status: false, data: err})
            }
            else{
                res.json({status: true})
            }

        })
      }
}
