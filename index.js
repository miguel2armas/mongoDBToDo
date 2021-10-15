const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { mongoose } = require('./database')
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//API Router To-do
app.use('/api/ToDo', require('./routes/todo.routes'));

//Home page
app.use(express.static(path.join(__dirname, 'public')));

//starting server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});