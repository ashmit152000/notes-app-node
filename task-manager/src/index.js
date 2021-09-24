const express = require('express')
const userRoute = require('./routers/user')
const taskRoute = require('./routers/task')
const jwt = require('jsonwebtoken')

require('./db/mongoose')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const router = new express.Router() // Access router

// Setup the route
router.get('/test',(req, res) => res.send("this is from my other router"))

// app.use((req, res, next) => {
//     res.status(503).send('The side is under maintenance. Please try again soon :)')
// })

// Register the router
app.use(router)
app.use(userRoute)
app.use(taskRoute)

// Without Middleware: New request -> run router handler 

// With Middleware: New request -> do something -> run router handler

// const myFunction = async () => {
//     const token = jwt.sign({
//         _id: "abc123"
//     }, "thisisashmitrajpathak")

//     console.log(token)
//     const data = jwt.verify(token,"thisisashmitrajpathak")
//     console.log(data)

// }

// myFunction()



app.listen(3000,() => {
    console.log('Listening on 3000...')
})