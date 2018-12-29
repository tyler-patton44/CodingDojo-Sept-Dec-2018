const mongoose = require('mongoose');
var Cakes = mongoose.model('cakes')
var com = mongoose.model('comments')


module.exports = {
    create: (req, res)=>{
        Cakes.create({baker: req.body.baker, image: req.body.image}, function(err) {
            console.log(req.body);
            if(err) {
                res.json({message: "Error", error: err})
            }
            else {
                res.json({message: "Success"})
            }
        });
      },
    createRate: (req, res)=>{
        com.create(req.body, function(err, data){
            if(err){
                res.json({message: "Error", error: err})
            }
            else{
                Cakes.findOneAndUpdate({_id: req.params.id}, {$push: {comments: req.body}}, function(err, data){
                    if(err){
                        res.json({message: "Error", error: err})
                    }
                    else {
                        res.json({message: "Success"})
                    }
                })
            }
        })
    },
    index: (req, res)=>{
        Cakes.find({}, function(err, cakes){
            if(err){
               console.log("Returned error", err);
                // respond with JSON
               res.json({message: "Error", error: err})
            }
            else {
                // respond with JSON
               res.json({data: cakes})
            }
         })
      },
      getID: (req, res)=>{
        Cakes.findOne({_id: req.params.id}, function(err, cake){
            if(err){
               console.log("Returned error", err);
                // respond with JSON
               res.json({message: "Error", error: err})
            }
            else {
                // respond with JSON
               res.json({data: cake})
            }
         })
      },
      deletor: (req, res)=>{
        Cakes.remove({_id: req.params.id}, function(err){
            if(err){
                res.json({status: false, data: err})
            }
            else{
                res.json({status: true})
            }

        })
      }
}
