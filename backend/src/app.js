const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./controllers');
const app = express();
const port = 3001;




const App = () => {

    app.use(bodyParser.json());

    const cors = require('cors');

    const corsOptions ={
        origin:'http://localhost:3000',
        credentials:true,            //access-control-allow-credentials:true
        optionSuccessStatus:200
    }
    app.use(cors(corsOptions));


  app.get('/', (request, response) => {
    response.send('Hello BetaBit!');

  });

  app.use('/contacts', controllers.contacts);

  app.listen(port, () => {
    console.log('App runs on port: ' + port);
  });
};

module.exports = App;
