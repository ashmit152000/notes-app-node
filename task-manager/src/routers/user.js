const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')
const User = require('../db/models/user')

router.get('/response', (req, res) => res.send("This is from response"))





router.post('/users', async  (req, res) => {
    
    console.log(req.body)
    const user = new User(req.body)
    const token = await user.generateAuthToken()
    try {
        await user.save()
        res.status(201).send({user, token})
    }
    catch(error){
        res.status(400).send(error)
    }
    
    
})

router.get('/users/me', auth , async (req, res) => {
    
   res.send(req.user)
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
        const user = await User.findById(_id)
        updates.forEach((update) => user[update] = req.body[update])
        await user.save()
        // const user = await User.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true})
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

router.post('/login/users', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.status(201).send({user, token})
    }catch(e){
        res.status(400).send(e)
    }
})

module.exports = router
