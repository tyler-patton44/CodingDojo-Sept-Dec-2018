const mongoose = require('mongoose');
var Products = mongoose.model('products')


module.exports = {
    create: (req, res)=>{
        Products.create({title: req.body.title, price: req.body.price, image: req.body.image}, function(err) {
            if(err) {
                res.json({Message: "Error", data: err})
            }
            else {
                res.json({Message: "Success"})
            }
        });
      },
    update: (req, res)=>{
        Products.findOne({_id: req.params.id}, function(err, prod){
            prod.title = req.body.title;
            prod.price = req.body.price;
            prod.image = req.body.image;
            prod.save(function(err){
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
        Products.find({}, function(err, prod){
            if(err){
                // respond with JSON
               res.json({Message: "Error", error: err})
            }
            else {
                // respond with JSON
               res.json({data: prod})
            }
         })
      },
      getID: (req, res)=>{
        Products.findOne({_id: req.params.id}, function(err, prod){
            if(err){
                // respond with JSON
               res.json({Message: "Error", error: err})
            }
            else {
                // respond with JSON
               res.json({data: prod})
            }
         })
      },
      deletor: (req, res)=>{
        Products.remove({_id: req.params.id}, function(err){
            if(err){
                res.json({Message: "Error", data: err})
            }
            else{
                res.json({Message: "Success"})
            }

        })
      }
}
