const Cake = require('./../controllers/info')

module.exports = (app) => {
app.post('/createtasks', Cake.create)
app.post('/createCom/:id', Cake.createRate)
app.get('/tasks', Cake.index)
app.get('/tasks/:id', Cake.getID)
app.delete('/delete/:id', Cake.deletor)
}