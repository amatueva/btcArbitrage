let exchangesInfo = require('./test.js');
module.exports = exchangesInfo.then( function (exchangesInfo) {
var bitstamp;
var one = ["binance", "okex", "hitbtc", "poloniex", "bitmex", "bitfinex", "gdax", "kraken", "bitflyer"];
var x = exchangesInfo.bitstamp.ask;
var allDif = [exchangesInfo.binance.bidPrice - x, exchangesInfo.okex.buy - x, exchangesInfo.hitbtc.bid - x, exchangesInfo.poloniex.highestBid - x, exchangesInfo.bitmex.close - x, exchangesInfo.bitfinex.bid - x, exchangesInfo.gdax.bid - x, exchangesInfo.kraken.b[0] - x];

  bitstamp = [one, allDif];
  return bitstamp;
}
);

