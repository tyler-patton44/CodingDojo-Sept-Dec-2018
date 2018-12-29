const User = require('../controllers/info')

module.exports = (app) => {
app.get('/', User.index)
app.post('/formInfo', User.create)
app.get('/animal/new', User.new)
app.get('/animal/:id', User.showOne)
app.get('/delete/:id', User.delete)
app.get('/edit/:id', User.edit)
app.post('/updateAnimal/:id', User.update)
}