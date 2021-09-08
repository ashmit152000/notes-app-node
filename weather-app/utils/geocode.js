const request = require('request')

const getDataOnAddress = (address, callback) => {
    
    
    const urlOne = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoiYXNobWl0a2FzaHlhcDE1MDkiLCJhIjoiY2tybTR6aHNwMHNwdzJubDd2OG44NHltaCJ9.RMa2eNAXzwwNRbZ16nmTXQ"
    
    request({url: urlOne, json: true}, (error, response) => {
        if(error){
            console.log(chalk.red.inverse('Unable to connect to the internet'))
        } else if (response.body.features.length === 0 ) {
            
            console.log(chalk.red.inverse("Location " + response.body.message))
        }
        else {
            const data = response.body
   
            callback(error,data.features[0].center[1],data.features[0].center[0],data.features[0].place_name)
          
    
        
        
        
        }
      
})
}

module.exports = getDataOnAddress