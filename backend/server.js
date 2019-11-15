const express = require('express');
const axios = require('axios');
const cors = require('cors');

const PORT = 8000;
const HOST = '0.0.0.0';

const app = express();

app.use(cors());

app.get('/wiki/summary/:title', (req, res, next) => {
  console.log('Fetching wikipedia article');
  const title = req.params.title;

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
        if (error.response.status !== 404) {
          next(error);
        }
        res.send();
      });
  } else {
    res.send();
  }
});

app.get('/wiki/pdf', (req, res) => {
  res.status(404).json({
    error: `This api endpoint is not yet implemented.`
  });
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
