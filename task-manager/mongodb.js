// CRUD 
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient // Necessary to connect to the DB
// const ObjectID = mongodb.ObjectId

const { MongoClient, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id =  ObjectId()
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error){
        return console.log('Unable to connect to the database !')
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({ _id: ObjectId("61441bf612d432d24ebf45c4") }, (error, user) => {
    //     if(error){
    //         return console.log('Unable to fetch the user')

    //     }

    //     console.log(user)
    // }) 

    db.collection('users').find({
        age: 21
    }).toArray((error, user) => {
        if(error){
            return console.log('Unable to get')
        }

        console.log(user)
    })

    db.collection('users').find({
        age: 21
    }).count((error, count) => {
        if(error){
            return console.log('Unable to get')
        }

        console.log(count)
    })

    




    // db.collection('users').insertOne({
    //     name: "Ashmit",
    //     age: 21
    // }, (error, result) => {
    //     if (error){
    //         return console.log('Unable to insert users')
    //     }
    //     console.log(result.insertedId)
    // })

      

    // db.collection('tasks').insertMany([
    //     {
    //         description: "Clean the house",
    //         completed: true
    //     },
    //     {
    //         description: "Renew inspection",
    //         completed: false
    //     },
    //     {   
    //         description: "Pot plants",
    //         completed: false
    //     },
    // ], (error, result) => {
    //     if(error){
    //         return console.log(error)
    //     }
    //     console.log(result)
    // })

})
