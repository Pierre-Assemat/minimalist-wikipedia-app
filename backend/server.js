const express = require('express');
const path = require('path');
const https = require('https');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/wiki/summary', (req, res) => {
  console.log('Fetching wikipedia article');
  https.get('https://xkcd.com/614/info.0.json', res => {
    console.log(res);
  });
});

app.get('/wiki/pdf', (req, res) => {
  // TODO: Implement PDF get request
});

app.get('/wiki/XKCD', (req, res) => {
  console.log("Fetching XKCD blog's last drawing");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
