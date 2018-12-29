const Message = require('../controllers/info')

module.exports = (app) => {
app.get('/', Message.index)
app.post('/formInfo', Message.createMes)
app.post('/createCom/:id', Message.createCom)
}