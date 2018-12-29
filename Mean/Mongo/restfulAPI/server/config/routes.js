const Animal = require('./../controllers/quotes')

module.exports = (app) => {
app.post('/createtasks', Animal.create)
app.get('/tasks', Animal.index)
app.get('/tasks/:id', Animal.getID)
app.put('/update/:id', Animal.updator)
app.delete('/delete/:id', Animal.deletor)
}