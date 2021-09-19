require('../src/db/mongoose')
const Task = require('../src/db/models/task')

// Task.findByIdAndDelete('61456a99d80a9b311e476dc0').then(( result ) => {
//     console.log(result)
//     return Task.countDocuments({completed: false})
// }).then((count) => {
//     console.log(count)
// })
// .catch((error) => console.log(error))

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('61461becb4ab8c30dfca1395').then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})