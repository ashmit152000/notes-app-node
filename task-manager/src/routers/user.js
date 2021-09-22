const express = require('express')
const router = new express.Router()
const User = require('../db/models/user')

router.get('/response', (req, res) => res.send("This is from response"))

router.post('/users', async  (req, res) => {
    
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

router.get('/users', async (req, res) => {
    
    try{
        const user =  await User.find({})
        res.status(201).send(user)
    }catch(error){
        res.status(400).send(error)
    }
}) 

router.get('/users/:id', async (req, res) => {
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

router.patch('/users/:id', async (req, res) => {
    const _id = req.params.id
    const updates = Object.keys(req.body)
    const allowUpdates = ['myName','age','email','password']
    const isValidUpdate = updates.every((update) => allowUpdates.includes(update))

    if(!isValidUpdate){
        return res.status(400).send({error: 'Invalid update!'})
    }

    try {
        const user = await User.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true})
        if(!user){
            return res.status(404).send('User not found')
        }
        res.status(201).send(user)
    }catch(error) {
        res.status(400).send(error)
    }
})


router.delete('/users/:id', async (req, res) => {
    const _id = req.params.id
  
    try {
        const user = await User.findByIdAndDelete(_id)
        if(!user){
            res.status(404).send({
                error: "User not found"
            })
        }

        res.status(201).send(user)

    }catch(error){
        res.status(400).send({error: error})
    }
    
})

module.exports = router
