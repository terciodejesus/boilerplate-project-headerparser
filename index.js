require('dotenv').config();
var express = require('express');
var app = express();

var cors = require('cors');

app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami', function (req, res) {
  const ip = req.ip
  const language = req.headers['accept-language']
  const userAgent = req.headers['user-agent']

  res.json({ipaddress: ip, language, software: userAgent})
});

var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
