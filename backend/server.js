const express = require('express');
const axios = require('axios');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.get('/wiki/summary', (req, res, next) => {
  console.log('Fetching wikipedia article');
  const title = req.query.title;

  if (title) {
    axios
      .get(`https://en.wikipedia.org/api/rest_v1/page/summary/${title}`, {
        headers: {
          'User-Agent': 'app'
        }
      })
      .then(result => {
        res.send(result.data);
      })
      .catch(error => {
        next(error);
      });
  } else {
    res.send();
  }
});

app.get('/wiki/pdf', (req, res) => {
  // TODO: Implement PDF get request
});

app.get('/wiki/XKCD', (req, res, next) => {
  console.log("Fetching XKCD blog's last drawing");

  axios
    .get('https://xkcd.com/614/info.0.json')
    .then(result => {
      res.send(result.data.img);
    })
    .catch(error => {
      next(error);
    });
});

app.use(function(err, req, res, next) {
  console.log(`Error: ${err.message}`);
  res.status(err.response.status).json({
    error: err.message
  });
});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
