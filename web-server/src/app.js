const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()

// Define paths for Express Config
const publicDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')
app.set('view engine', 'hbs') // To setup handlebars
app.set('views', viewsPath) // Add Views location for Express templating
hbs.registerPartials(partialPath) // To add partial paths
app.use(express.static(publicDir)) // Setup static directory to serve


app.get('', (req, res) => {
    res.render('index', {
        title: "Weather App",
        name:  "Ashmit"
    }) 
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "This is the about page", 
        name: "Ashmit"
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: "Sunny",
        location: "New Delhi, India"
    })
})


app.get('/help', (req, res) => {
    res.render('help', {
        title: "Help Page",
        message: "We are here to help you",
        name: "Ashmit"
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: "404 help",
        name: "Ashmit",
        error: "Help Article Not Found"
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: "404",
        name: "Ashmit",
        error: "Page Not Found"
    })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})