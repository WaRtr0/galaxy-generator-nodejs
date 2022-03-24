const express = require('express');
const app = express();
const server = require('http').createServer(app);
const fs = require('fs');
const galaxy = require('./server/generate.js');

app.use(express.static(__dirname + '/public'));

app.get('/generate', function(req, res) {
  fs.writeFileSync('public/data/output.json', JSON.stringify(galaxy(), null, 2)); // galaxy(<branch quantity>,<stars quantity>,<galaxy variation width>,<galaxy variation height>,<core variation>)  default: galaxy(12000,0.4,0.4,0.2)
  res.redirect('/');
});

server.listen(process.env.PORT || 30000, ()=>{
  console.log(`Your port : ${process.env.PORT ||30000}`);
});
