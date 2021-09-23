const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userSchema = new mongoose.Schema({
    myName: {
        type: String,
        required: true,
        trim: true

    },
    email: {
        type: String, 
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        required: true, 

        trim: true, 
        type: String, 
        minLength: 6, 
        validate(value){
            if(value === 'password'){
                throw new Error('Password cannot be password')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value){
            if(value < 0){
                throw new Error('Age must be a positive number')
            }
        }
        

        },

        tokens: [{
            token: {
                type: String,
                required: true
            }
        }]
})

userSchema.methods.generateAuthToken = async function() {
    const user = this
    const token = jwt.sign({
        _id: user.id.toString()
    }, "thisisashmitpathak")
    user.tokens = user.tokens.concat({
        token
    })

    await user.save()
    return token

}

userSchema.statics.findByCredentials = async (email, password) => {
    try { 
        const user = await User.findOne({email})
        if (!user) {
            throw new Error('Not a valid user. Try again!!')

        }
        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch){
            throw new Error('Incorrect password!!')
        }

        return user

    } catch(e)  {    
        throw new Error(e)
    }
}

// Runs before save
userSchema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User