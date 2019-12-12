const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()
const port = 4000

app.get('/api', (req, res) => {
    res.json({
        message: 'Welcome to the API'
    })
})

app.post('/api/posts', verifyToken, (req, res) => {

    jwt.verify(req.token, 'secretKey', (err, authData) => {
        if (err) {
            res.sendStatus(403)
        } else {
            res.json({
                message: 'Post created!',
                authData
            })
        }
    })
})

app.post('/api/login', (req, res) => {

    const user = {
        id: 1,
        username: 'failace',
        email: 'guilherme.failace@gmail.com'
    }

    jwt.sign({ user }, 'secretKey', { expiresIn: '30s' }, (err, token) => {
        res.json({
            token
        })
    })
})

//Format of token
//Authorization: Bearer <access_token>


//Verify Token

function verifyToken(req, res, next) {
    //Get auth header value
    const bearerHeader = req.headers['authorization']
    //Check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
        //Split at the space
        const bearer = bearerHeader.split(' ')
        //Get the token from array
        const bearerToken = bearer[1]
        //Set the token
        req.token = bearerToken
        //Next middleware
        next()
    } else {
        //Forbidden
        res.sendStatus(403);
    }
}

app.listen(port, () => console.log('Listening on port: ' + port))