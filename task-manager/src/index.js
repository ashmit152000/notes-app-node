const express = require('express')
const mongoose = require('mongoose')
const Task = require('./db/models/task')

require('./db/mongoose')
const User = require('./db/models/user')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/users', (req, res) => {
    
    console.log(req.body)
    const user = new User(req.body)
    user.save().then((result) => {
        res.status(201).send(user)
    }).catch((error) => {
        res.status(400).send(error)
    })

    
})

app.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.status(201).send(users)
    }).catch((error) => {
        res.status(400).send(error)
    })
}) 

app.get('/users/:id', (req, res) => {
    const _id = req.params['id'];
    User.findById(_id).then((user) => {
        if(!user) {
            return res.status(400).send({
                message: "User not found"
            })
        } 
        res.status(201).send(user)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

app.post('/tasks', (req, res) => {
    console.log(req.body)
    const task = new Task(req.body)
    task.save().then(() => {
        res.send(task)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

app.get('/tasks', (req, res) => {
    Task.find({}).then((tasks) => {
        res.status(201).send(tasks)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

app.get('/tasks/:id', (req, res) => {
    const _id = req.params.id

    Task.findById(_id).then((task) => {
        if(!task){
            return res.status(400).send({
                message: "Task not present"
            })
        }
        res.status(201).send(task)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

app.listen(3000,() => {
    console.log('Listening on 3000...')
})