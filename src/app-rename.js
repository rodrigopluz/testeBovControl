const path = require('path');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// connection db
mongoose.connect('mongodb+srv://username:password@api-mongodb-visy3.mongodb.net/bovControl?retryWrites=true&w=majority')
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));

// importing routes
const indexRoutes = require('./routes/index');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))

// routes
app.use('/', indexRoutes);

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
