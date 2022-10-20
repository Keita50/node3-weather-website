const request = require('request')

const forecast = (latitude,longtitude,callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=fb0928c7ca807d9be5f93ce152b35aec&query=' + latitude + ',' + longtitude + '&units=f'

    request({url, json: true},(error, {body})=>{
        if(error){
            callback('Low level error', undefined)
        }else if(body.error){
            callback('Coordinate error', undefined)
        }else{
            callback(undefined ,body.current.weather_descriptions +  'It is currently' + body.current.temperature +' degrees out.' );
        }    
    })
}

module.exports = forecast