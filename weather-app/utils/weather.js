const request = require('request')
const chalk = require('chalk')

const weatherData = (lat,lon, place_name) => {
    const url = 'http://api.weatherstack.com/current?access_key=fe06a03b0aa997abfaffe7cd3ec47494&query='+ lat  + "," + lon
        request({url: url, json: true}, (error, responseTwo) => {
            if(error){
                console.log('Unable to fetch data')
            }else if(responseTwo.body.error){
                console.log(chalk.red.inverse(error))
            }else{
                const data = responseTwo.body.current
      
                console.log(chalk.green.inverse('Currently the temperature is ' + data.temperature + " . And it feels like " + data.feelslike + " in " + place_name))
                console.log('Ending...')
            }
       
    })
}

module.exports = weatherData

