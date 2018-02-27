const express = require('express');
const app = express();
const ejs = require('ejs');
// const PORT = 8080;
const path = require('path');
const binance = require('./binance');
const bitfinex = require('./bitfinex');
const bitflyer = require('./bitflyer');
const bitmex = require('./bitmex');
const bitstamp = require('./bitstamp');
const gdax = require('./gdax');
const hitbtc = require('./hitbtc');
const kraken = require('./kraken');
const okex = require('./okex');
const poloniex = require('./poloniex');
var cors = require('cors');
const exchangesInfo = require('./exchangesInfo');

app.set('port', process.env.PORT || 3000);
const server = app.listen(app.get('port'), function() {
  console.log('listening to port ' + app.get('port'));
  });
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(cors());
// app.listen(PORT, function () {
//   console.log(`app is listening on ${PORT}`);
// });
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req,res) {
  exchangesInfo.then( function (exchangesInfo) {
  res.json(exchangesInfo);
});
}); 
app.get('/binance', function (req,res) {
  binance.then(function (binance) {
   res.json(binance);
  });
}); 
app.get('/bitfinex', function (req,res) {
  bitfinex.then(function (bitfinex) {
   res.json(bitfinex);
  });
}); 
app.get('/bitflyer', function (req,res) {
  bitflyer.then(function (bitflyer) {
   res.json(bitflyer);
  });
}); 
app.get('/bitmex', function (req,res) {
  bitmex.then(function (bitmex) {
   res.json(bitmex);
  });
}); 
app.get('/bitstamp', function (req,res) {
  bitstamp.then(function (bitstamp) {
   res.json(bitstamp);
  });
}); 
app.get('/gdax', function (req,res) {
  gdax.then(function (gdax) {
   res.json(gdax);
  });
}); 
app.get('/hitbtc', function (req,res) {
  hitbtc.then(function (hitbtc) {
   res.json(hitbtc);
  });
}); 
app.get('/kraken', function (req,res) {
  kraken.then(function (kraken) {
   res.json(kraken);
  });
}); 
app.get('/okex', function (req,res) {
  okex.then(function (okex) {
   res.json(okex);
  });
}); 
app.get('/poloniex', function (req,res) {
  poloniex.then(function (poloniex) {
   res.json(poloniex);
  });
}); 