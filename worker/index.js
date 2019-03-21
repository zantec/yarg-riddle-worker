// main worker file

const _ = require('lodash');
const axios = require('axios');
require('dotenv').config();

var CronJob = require('cron').CronJob;

const job = new CronJob('* * */4 * * *', function() {
  axios({
    method: 'POST',
    url: `http://${process.env.RIDDLE_API}/api/server/treasure`,
  })
    .catch((err) => {
      // why make error handling
      // if you dont make errors?
    });
});

job.start();

