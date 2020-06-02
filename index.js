'use strict';
require('dotenv');
const server = require('./lib/server.js');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const MONOGODB_URI = process.env.MONOGODB_URI;
mongoose.connect(MONOGODB_URI,{ useNewUrlParser: true,useUnifiedTopology: true });


server.start(PORT);
 
