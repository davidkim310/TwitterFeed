var express = require('express');
var app = express();
var Twitter = require('twitter');
require('dotenv').config();

var client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});
//checks to see if these folders exist and sets up a path (entry directory point)
app.use(express.static('./Client'));
app.get('/api/users', function(req, res){
  console.log("we hit api use");
  //anything after ? is req.query.user
  var params = {screen_name : req.query.user,
                count: 10};
  client.get('statuses/user_timeline', params, function(error, tweets, response){
    if(error) {
      console.log(error);
    }
    //accounts for "null" & "undefined"
    res.json(tweets);
  });
  //  res.json(params);
});
// app.post();
app.listen(3000, function(){
  console.log("listening");
});
