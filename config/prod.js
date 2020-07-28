const { googleClientID } = require("./dev");

module.exports = {
     /* mongoURI: 'mongodb+srv://production:RSxZzSLyVE8uhYBn@cluster0.uhwxd.mongodb.net/prodDb?retryWrites=true&w=majority',
      googleClientID: '327027291962-dtbpfjrq46qnjpqp4qi60kj03nqlirvi.apps.googleusercontent.com',
      googleClientSecret: 'YWRjnRnaGkAShyMHz0oMzPqE',
      cookieKey: 'urwytwrohfjdsvndancjwqhfuowncjad'*/

      googleClientID : process.env.GOOGLE_CLIENT_ID,
      googleClientSecret : process.env.GOOGLE_CLIENT_SECRET,
      mongoURI : process.env.MONGO_URI,
      cookieKey : process.env.COOKIE_KEY
};