const express = require('express')

const Task = require('./db/models/task')

require('./db/mongoose')
const User = require('./db/models/user')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/users', async  (req, res) => {
    
    console.log(req.body)
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).send(user)
    }
    catch(error){
        res.status(400).send(error)
    }
    
    
})

app.get('/users', async (req, res) => {
    
    try{
        const user =  await User.find({})
        res.status(201).send(user)
    }catch(error){
        res.status(400).send(error)
    }
}) 

app.get('/users/:id', async (req, res) => {
    const _id = req.params['id'];
    
    try {
        const user = await User.findById(_id)
        if(!user){
            return res.status(404).send('User not present')
        }
        res.status(201).send(user)
    } catch(error){
        res.status(400).send(error)
    }
})

app.post('/tasks', async (req, res) => {
    console.log(req.body)
    const task = new Task(req.body)
    try {
        await task.save()
        res.status(201).send(task)
    } catch(error){
        res.status(400).send(error)
    }
    
})

app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(201).send(tasks)
    } catch (error) {
        res.status(400).send(error)
    }
    
    
})

app.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const task = await Task.findById(_id)
        if(!task){
            return res.status(404).send('Task not present')
        }
        res.status(201).send(task)
    } catch(error) {
        res.status(400).send(error)
    }
    
})

app.listen(3000,() => {
    console.log('Listening on 3000...')
})