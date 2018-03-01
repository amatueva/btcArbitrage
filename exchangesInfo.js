let exchangesInfo = require('./test.js');
let _ = require('lodash');
module.exports = exchangesInfo.then(allMarkets => {
  let exchangesInfo = {};
  let names = Object.keys(allMarkets).map((market) => _.toUpper(market));
  let volumes = [];
  volumes.push(Object.values(allMarkets)[0].volume);
  volumes.push(Object.values(allMarkets)[1].vol);
  volumes.push(Object.values(allMarkets)[2].volume);
  volumes.push(Object.values(allMarkets)[3].quoteVolume);
  volumes.push(Object.values(allMarkets)[4].volume);
  volumes.push(Object.values(allMarkets)[5].volume);
  volumes.push(Object.values(allMarkets)[6].volume);
  volumes.push(Object.values(allMarkets)[7].v[0]);
  volumes.push(Object.values(allMarkets)[8].volume);
  volumes.push(Object.values(allMarkets)[9].volume);
  let lastPrice = [];
  lastPrice.push(Object.values(allMarkets)[0].lastPrice);
  lastPrice.push(Object.values(allMarkets)[1].last);
  lastPrice.push(Object.values(allMarkets)[2].last);
  lastPrice.push(Object.values(allMarkets)[3].last);
  lastPrice.push(Object.values(allMarkets)[4].close);
  lastPrice.push(Object.values(allMarkets)[5].last_price);
  lastPrice.push(Object.values(allMarkets)[6].price);
  lastPrice.push(Object.values(allMarkets)[7].p[0]);
  lastPrice.push(Object.values(allMarkets)[8].ltp);
  lastPrice.push(Object.values(allMarkets)[9].last);
  exchangesInfo.names = names;
  exchangesInfo.volume = volumes;
  exchangesInfo.lastPrice = lastPrice;
  return exchangesInfo;
}

);