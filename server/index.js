const moment = require('moment-timezone')
const Token = require('./models/tokens/model');
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const port = 3001;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise; // let's us use then catch
mongoose.set('useCreateIndex', true);
mongoose.connect('str', { useNewUrlParser: true });
mongoose.connection
    .once('open', () => console.log('Mongodb running'))
    .on('error', err => console.log(err)); // to use routes

//lets us access/write JSON objects and push to database
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit:50000}));
app.use(morgan('dev')); //debugging for HTTP requests


app.use('/api', [ TokenRoutes ]);


var timestamps = {
  '21:10': 'Zahra Billoo',
  '15:50': 'Hamza Yusuf'
}

server.listen(port, () => {
  console.log("server running on port:" + port)

  let currentTime = (moment().tz("America/Los_Angeles").format('HH:mm'));
  let speaker = timestamps[currentTime];
  setInterval(() => {
    if(currentTime in timestamps) {
      io.emit('notification',{
        speaker: currentTime
      });
    }
  }, 1000)
});
