const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose
  .connect('mongodb://localhost/urlShortener', {})
  .then(() => console.log('MongoDb connected'))
  .catch((err) => console.log('MongoDB connection error', err));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/shortUrls', (req, res) => {});

app.listen(process.env.PORT || 3000);
