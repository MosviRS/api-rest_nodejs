const express = require('express');
const morgan = require('morgan');
const app = express();
const path= require('path');
const NODE_ENV= process.env.NODE_ENV || 'development';
require('dotenv').config({
  path: `.env.${NODE_ENV}`
});

//Settings
app.set('port',process.env.PORT || 3000);

//Middleware
app.use(express.json());
app.use(morgan('dev'));

//Routes
app.use('/api/cursos',require('./routes/curso.routes'));
app.use('/api/auth',require('./routes/auth.routes'));

//Starting Server
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'../index.html'))
});


app.listen(app.get('port'), () => {
  console.log(`Example app listening at http://localhost:${app.get('port')}`)
});