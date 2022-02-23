const express = require('express');
const bodyParser = require('body-parser')
const controllers = require('./controllers')
const app = express()
const port = 3000

app.use(bodyParser.json())




const App = () => {

    app.get('/', (request, response) => {
        response.send('Hello BetaBit!')
    })

    app.use('/contacts', controllers.contacts)

    app.listen(port, () => {
        console.log('App runs on port: ' + port)
    })

}

module.exports = App
