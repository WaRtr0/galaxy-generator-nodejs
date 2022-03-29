const express = require('express');
const app = express();
const server = require('http').createServer(app);
const fs = require('fs');
const galaxy = require('./server/generate.js');

app.use(express.static(__dirname + '/public'));

app.get('/generate', function(req, res) {
  fs.writeFileSync('public/data/output.json', JSON.stringify(galaxy(), null, 2)); // galaxy({branch:<branch quantity>,nbrStar:<stars quantity>,vWidth:<galaxy variation width>,vHeitght:<galaxy variation height>,vCore:<core variation>})
  res.redirect('/');
});

server.listen(process.env.PORT || 30000, ()=>{
  console.log(`Your port : ${process.env.PORT ||30000}`);
});