/*module.exports = {
      googleClientID :  '203240600540-302inmmouq7s8ll0fm3b2142qoggjj33.apps.googleusercontent.com',
      googleClientSecret :  'hQN3SND0bf-Gq2w71dBuYtOO',
      mongoURI: 'mongodb+srv://p00gz:4BLfq4QzQHYV1xXz@emaily.dfi04.mongodb.net/mymongodb?retryWrites=true&w=majority',
      cookieKey: 'hfbdsbvnfsvsfmghwhrfipqdknfjwlrhfr',
      productionURI: 'mongodb+srv://production:RSxZzSLyVE8uhYBn@cluster0.uhwxd.mongodb.net/prodDb?retryWrites=true&w=majority',
      prodgoogleClientID: '327027291962-dtbpfjrq46qnjpqp4qi60kj03nqlirvi.apps.googleusercontent.com',
      prodgoogleClientSecret: 'YWRjnRnaGkAShyMHz0oMzPqE'
};

*/



if(process.env.NODE_ENV === 'production') {
      module.exports = require('./prod');
} else {
      module.exports = require('./dev');
}