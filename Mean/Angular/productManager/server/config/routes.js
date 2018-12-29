const Products = require('./../controllers/info')

module.exports = (app) => {
app.post('/createtasks', Products.create)
app.put('/update/:id', Products.update)
app.get('/tasks', Products.index)
app.get('/tasks/:id', Products.getID)
app.delete('/delete/:id', Products.deletor)
}