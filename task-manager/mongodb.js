// CRUD 
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient // Necessary to connect to the DB

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error){
        return console.log('Unable to connect to the database !')
    }

    const db = client.db(databaseName)
    // db.collection('users').insertOne({
    //     name: "Ashmit",
    //     age: 21
    // }, (error, result) => {
    //     if (error){
    //         return console.log('Unable to insert users')
    //     }
    //     console.log(result.insertedId)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     },
    //     {   
    //         name: 'Gunther',
    //         age: 27
    //     },
        
    // ], (error, result) => {
    //     if(error){
    //         return console.log(error)
    //     }
    //     console.log(result)
    // })  

    db.collection('tasks').insertMany([
        {
            description: "Clean the house",
            completed: true
        },
        {
            description: "Renew inspection",
            completed: false
        },
        {   
            description: "Pot plants",
            completed: false
        },
    ], (error, result) => {
        if(error){
            return console.log(error)
        }
        console.log(result)
    })

})
