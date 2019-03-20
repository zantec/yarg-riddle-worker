// main worker file

const _ = require('lodash');
const axios = require('axios');
require('dotenv').config();

var CronJob = require('cron').CronJob;

var count = 0;

const job = new CronJob('* * */4 * * *', function() {
  axios({
    method: 'POST',
    url: `${process.env.RIDDLE_API}/api/server/treasure`,
  })
    .catch((err) => {
      // error handling is for noobs
    });
}, null, true);

job.start();

