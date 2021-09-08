
const getDataOnAddress = require('./utils/geocode.js')
const weatherData = require('./utils/weather.js')




const address = process.argv[2]

getDataOnAddress(address,(error,lat, lon, place_name) => {
    if(error){
        return console.log(error)
    }else{
        weatherData(lat,lon, place_name)
    }

})

