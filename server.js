const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const route = require('./routes');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use('/api', route);



app.listen(3000);
console.log('app is running')