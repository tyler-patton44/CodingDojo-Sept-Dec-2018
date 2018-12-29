const mongoose = require('mongoose');
var Authors = mongoose.model('authors')
var Quotes = mongoose.model('quotes')



module.exports = {
    create: (req, res)=>{
        Authors.create({name: req.body.name}, function(err) {
            if(err) {
                res.json({Message: "Error", data: err})
            }
            else {
                res.json({Message: "Success"})
            }
        });
      },
    update: (req, res)=>{
        Authors.findOne({_id: req.params.id}, function(err, user){
            user.name = req.body.name;
            user.save(function(err){
                if(err){
                    res.json({Message: "Error", data: err})
                }
                else{
                    res.json({Message: "Success"})
                }
            })
        
          })
    },
    index: (req, res)=>{
        Authors.find({}, function(err, auth){
            if(err){
                // respond with JSON
               res.json({Message: "Error", data: err})
            }
            else {
                // respond with JSON
               res.json({data: auth})
            }
         })
      },
      getID: (req, res)=>{
        Authors.findOne({_id: req.params.id}, function(err, auth){
            if(err){
                // respond with JSON
               res.json({Message: "Error", data: err})
            }
            else {
                // respond with JSON
               res.json({data: auth})
            }
         }).sort( { likes: 1 } )
      },
      deletor: (req, res)=>{
        Authors.findOneAndUpdate({_id: req.params.A_id}, {$pull: {quotes: {_id: req.params.Q_id}}}, function(err, data){
            if(err){
                res.json({Message: "Error", data: err})
            }
            else {
                res.json({Message: "Success"})
            }
        })
      },
      createQuote: (req, res)=>{
        Quotes.create(req.body, function(err, data){
            if(err){
                res.json({Message: "Error", data: err})
            }
            else{
                Authors.findOneAndUpdate({_id: req.params.id}, {$push: {quotes: req.body}}, function(err, data){
                    if(err){
                        res.json({Message: "Error", data: err})
                    }
                    else {
                        res.json({Message: "Success"})
                    }
                })
            }
        })
    },
    vote: (req, res)=>{
        Authors.findOne({_id: req.params.id}, function(err, user){
            for(let x=0; x<user.quotes.length; x++){
                if(user.quotes[x]._id == req.params.Q_id){
                    user.quotes[x].votes += req.body.votes;
                }
            }
            user.save(function(err){
                if(err){
                    res.json({Message: "Error", data: err})
                }
                else{
                    res.json({Message: "Success"})
                }
            })
        })
    }
}
