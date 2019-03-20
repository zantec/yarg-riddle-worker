// main worker file

const _ = require('lodash');
require('dotenv').config();

var CronJob = require('cron').CronJob;

new CronJob('* * * * * *', function() {
  console.log('You will see this message every second');
}, null, true, 'America/Los_Angeles');



