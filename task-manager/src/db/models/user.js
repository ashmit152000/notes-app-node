const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    myName: {
        type: String,
        required: true,
        trim: true

    },
    email: {
        type: String, 
        required: true,
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
        

        }
})

module.exports = User