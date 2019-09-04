const moment = require('moment-timezone')

var timestamps = {
  '15:48': true,
  '15:50': true
}

console.log((moment().tz("America/Los_Angeles").format('HH:mm')) in timestamps);
