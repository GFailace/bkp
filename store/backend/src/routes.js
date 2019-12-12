const express = require('express')
const jwt = require('jsonwebtoken')
const routes = express.Router();

const DevController = require('./controllers/DevController')

routes.get('/', (req, res) => {
    return res.json({ message: `Olá ${req.query.name}` });
})

routes.get('/api/item', DevController.index)
/* routes.get('/api/item/:id', DevController.search) */
routes.post('/api/item', DevController.store)
routes.delete('/api/item/:id', DevController.delete)
router.post('/api/login', (req, res) => {

    const user = {
        id = 1,
        username: 'failace',
        email: 'guilherme.failace@gmail.com'
    }

    jwt.sign({ user }, 'secretKey', (err, token) => {
        res.json({
            token
        })
    })
})


module.exports = routes