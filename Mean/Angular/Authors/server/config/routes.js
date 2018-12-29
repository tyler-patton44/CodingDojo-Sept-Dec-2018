const Author = require('./../controllers/info')

module.exports = (app) => {
app.post('/createtasks', Author.create)
app.post('/createQuote/:id', Author.createQuote)
app.put('/update/:id', Author.update)
app.put('/vote/:id/:Q_id', Author.vote)
app.get('/tasks', Author.index)
app.get('/tasks/:id', Author.getID)
app.delete('/delete/:A_id/:Q_id', Author.deletor)
}