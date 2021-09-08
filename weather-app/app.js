
const getDataOnAddress = require('./utils/geocode.js')
const weatherData = require('./utils/weather.js')
const chalk = require('chalk')



const address = process.argv[2]

if(!address){
    return console.log(chalk.red.inverse('Address not provided'))
}else{
    getDataOnAddress(address,(error,lat, lon, place_name) => {
        if(error){
            return console.log(error)
        }else{
            weatherData(lat,lon, place_name)
        }
    
    })
}



