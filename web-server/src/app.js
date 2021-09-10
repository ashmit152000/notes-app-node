const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('<h1>Hello, Express</h1>') 
})

app.get('/about', (req, res) => {
    res.send({
        name: "Ashmit", 
        age: 20
    })
})

app.get('/weather', (req, res) => {
    res.send('This is the weather app')
})


app.get('/help', (req, res) => {
    res.send([{id: 1, contact: "+91"}, {id: 2, contact: "+919"}])
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})