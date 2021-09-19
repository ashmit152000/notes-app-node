const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true
 
})



// const me = new User(
//     {
//         myName: " Ashmit Pathak ",
//         age: 19,
//         email: " ashmit@gmail.com ",
//         password: "123456"
//     }
// )

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log(error)
// })




// const taskone = new Task({
//     description: "  This is task one   ",
//     completed: true
// })

// taskone.save().then(() => {
//     console.log(taskone)
// }).catch((error) => {
//     console.log(error)
// })