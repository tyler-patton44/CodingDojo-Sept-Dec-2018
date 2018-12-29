const mongoose = require('mongoose');
var message = mongoose.model('eMessages')
var comment = mongoose.model('eComments')


module.exports = {
    index: (req, res)=>{
        message.find().populate('comments').exec(function(err, messages){
            if(err){
                console.log(err);
            }
            else{
                res.render("index", {mes: messages});
            }
        })
    },
    createMes: (req, res)=>{
        var newMessage = new message({name: req.body.name, content: req.body.content});
        newMessage.save(function(err) {
            if(err) {
                for(var key in err.errors){
                    if(err.errors[key].properties.path === 'name'){
                        req.flash('Comname', err.errors[key].message);
                    }
                    if(err.errors[key].properties.path === 'content'){
                        req.flash('Comcontent', err.errors[key].message);
                    }
                }
            } 
            res.redirect('/');
        })
    },
    createCom: (req, res)=>{
        comment.create(req.body, function(err, data){
            if(err){
                for(var key in err.errors){
                    if(err.errors[key].properties.path === 'Comname'){
                        req.flash('Comname', err.errors[key].message);
                    }
                    if(err.errors[key].properties.path === 'Comcontent'){
                        req.flash('Comcontent', err.errors[key].message);
                    }
                }
                res.redirect('/');
            }
            else{
                message.findOneAndUpdate({_id: req.params.id}, {$push: {comments: req.body}}, function(err, data){
                    if(err){
                        console.log(err);
                    }
                    else {
                        res.redirect('/');
                    }
                })
            }
        })

    }
}
