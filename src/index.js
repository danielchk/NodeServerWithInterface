//Start the app

const express = require('express');  
const morgan = require('morgan');

//initialization

const app = express();

//settings

app.set('port', process.env.PORT || 4000);

//Middlewares

app.use(morgan('dev'));   //info comming to our server

//Golbal Variables

//Routes(URLs)

app.use(require('./routes/'));

//Public(Code that the server can acced)

//Starting the server

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});