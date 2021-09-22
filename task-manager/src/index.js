const express = require('express')
const userRoute = require('./routers/user')
const taskRoute = require('./routers/task')
const Task = require('./db/models/task')

require('./db/mongoose')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const router = new express.Router() // Access router

// Setup the route
router.get('/test',(req, res) => res.send("this is from my other router"))

// Register the router
app.use(router)
app.use(userRoute)
app.use(taskRoute)





app.listen(3000,() => {
    console.log('Listening on 3000...')
})