const express = require('express')
const router = new express.Router()
const Task = require('../db/models/task')

router.post('/tasks', async (req, res) => {
    console.log(req.body)
    const task = new Task(req.body)
    try {
        await task.save()
        res.status(201).send(task)
    } catch(error){
        res.status(400).send(error)
    }
    
})

router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(201).send(tasks)
    } catch (error) {
        res.status(400).send(error)
    }
    
    
})

router.get('/tasks/:id', async (req, res) => {
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

router.patch('/tasks/:id', async (req,res) => {
    const updates = Object.keys(req.body)
    const allowUpdates = ['description', 'completed']
    const isValidUpdate = updates.every((update) => allowUpdates.includes(update))

    if(!isValidUpdate){
        return res.status(400).send({error: "Invalid Update!"})
    }

    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body,{new: true, runValidators: true})

        if(!task) {
            return res.status(404).send({error: "Task not found"})
        }

        res.status(201).send(task)

    }catch( error ){
        res.status(400).send(error)
    }
    

    

})



router.delete('/tasks/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const task = await Task.findByIdAndDelete(_id)
        if(!task) {
            res.status(404).send({
                error: "Task Not Found"
            })
        }

        res.status(201).send(task)
    }catch(error){
        res.status(400).send({error: error})
    }
})


module.exports = router