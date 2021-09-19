const express = require('express')
require('./db/mongoose')
const User = require('./db/models/user')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/users', (req, res) => {
    
    console.log(req.body)
    const user = new User(req.body)
    user.save().then((result) => {
        res.send(user)
    }).catch((error) => {
        res.status(400).send(error)
    })

    
})


app.listen(3000,() => {
    console.log('Listening on 3000...')
})