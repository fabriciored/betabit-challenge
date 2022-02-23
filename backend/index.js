const express = require('express');
const app = express();
const port = 3000

app.get('/', (request, response) => {
    response.send('Hello BetaBit!')
})

app.listen(port, () => {
    console.log('App runs on port: ' + port)
})