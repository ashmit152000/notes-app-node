const fs = require('fs')




const dataBuffer = fs.readFileSync('1-json.json')
const JSONdata = dataBuffer.toString()
const user = JSON.parse(JSONdata)

user.name = "Ashmit"
user.age = 21

const updatedUser = JSON.stringify(user)
fs.writeFileSync('1-json.json',updatedUser)