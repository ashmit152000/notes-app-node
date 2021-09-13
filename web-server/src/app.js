const express = require('express')
const path = require('path')
const app = express()

const publicDir = path.join(__dirname, '../public')
app.set('view engine', 'hbs') // To setup handlebars
app.use(express.static(publicDir))

app.get('', (req, res) => {
    res.render('index', {
        title: "Weather App",
        name:  "Ashmit"
    }) 
})

// app.get('/about', (req, res) => {
//     res.send({
//         name: "Ashmit", 
//         age: 20
//     })
// })

app.get('/weather', (req, res) => {
    res.send({
        forecast: "Sunny",
        location: "New Delhi, India"
    })
})


app.get('/help', (req, res) => {
    res.send([{id: 1, contact: "+91"}, {id: 2, contact: "+919"}])
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})