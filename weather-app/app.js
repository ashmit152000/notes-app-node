const request = require('request')
const chalk = require('chalk')
// const url = 'http://api.weatherstack.com/current?access_key=fe06a03b0aa997abfaffe7cd3ec47494&query=New%20Delhi&units=f'

// request({url: url, json: true}, (error, response) => {
//     const data = response.body.current
//     console.log(chalk.green.inverse(response.body.current.weather_descriptions[0] + '. Currently the temperature is ' + data.temperature + " . And it feels like " + data.feelslike))
// })
 
// Geocoding 
// Address -> Lat and Long -> Weather 

const getDataOnAddress = (address) => {
    
    
    const urlOne = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoiYXNobWl0a2FzaHlhcDE1MDkiLCJhIjoiY2tybTR6aHNwMHNwdzJubDd2OG44NHltaCJ9.RMa2eNAXzwwNRbZ16nmTXQ"
    
    request({url: urlOne, json: true}, (error, response) => {
        if(error){
            console.log(chalk.red.inverse('Unable to connect to the internet'))
        } else if (response.body.message) {
            
            console.log(chalk.red.inverse("Location " + response.body.message))
        }
        else{
            const data = response.body
   
           
          
    
        
        
        const url = 'http://api.weatherstack.com/current?access_key=fe06a03b0aa997abfaffe7cd3ec47494&query=' + data.features[0].center[0] + "," + data.features[0].center[1]
        request({url: url, json: true}, (error, responseTwo) => {
            if(error){
                console.log('Unable to fetch data')
            }else if(response.body.error){
                console.log(chalk.red.inverse(error))
            }else{
                const data = responseTwo.body.current
      
                console.log(chalk.green.inverse('Currently the temperature is ' + data.temperature + " . And it feels like " + data.feelslike))
                console.log('Ending...')
            }
       
    })
        }
      
})
}

getDataOnAddress('Hudco Extension, New Delhi')

