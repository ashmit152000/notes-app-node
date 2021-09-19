require('../src/db/mongoose')
const User = require('../src/db/models/user')

// User.findByIdAndUpdate('6146fb3b54bc64fb4fd9c460', {age: 25}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 25})
// }).then((count) => {
//     console.log(count)
// })
// .catch((error) => {
//     console.log(error)
// })

const updateAgeAndCount = async (id , age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
   
    return count
}   

updateAgeAndCount('6146b507084d4fd22dbcbd03', 30).then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})