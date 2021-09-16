const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=fe06a03b0aa997abfaffe7cd3ec47494&query='+ latitude  + "," + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.temperature + ' It is currently ' + body.current.feelslike + ' degress out. ' + " in " +  body.location.name)
        }
    })
}

module.exports = forecast