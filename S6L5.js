const request = require('request')
const url = 'https://gorest.co.in/public/v2/users'
// 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
    console.log('name :' + response.body[1].name)
    console.log('emai; :' + response.body[1].email)
    console.log('gender :' + response.body[1].gender)
})