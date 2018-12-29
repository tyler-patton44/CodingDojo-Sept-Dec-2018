const User = require('../controllers/info')

module.exports = (app) => {
app.get('/', User.index)
app.post('/register', User.register)
app.post('/login', User.login)
app.get('/users', User.show)
app.get('/logout', User.logout)
}