let exchangesInfo = require('./test.js');
module.exports = exchangesInfo.then( function (exchangesInfo) {
var gdax;
var one = ["binance", "okex", "hitbtc", "poloniex", "bitmex", "bitfinex", "gdax", "bitflyer", "bitstamp"];
var x = exchangesInfo.kraken.a[0];
var allDif = [exchangesInfo.binance.bidPrice - x, exchangesInfo.okex.buy - x, exchangesInfo.hitbtc.bid - x, exchangesInfo.poloniex.highestBid - x, exchangesInfo.bitmex.close - x, exchangesInfo.bitfinex.bid - x, exchangesInfo.kraken.b[0] - x, exchangesInfo.bitflyer.best_bid - x, exchangesInfo.bitstamp.bid - x];


  gdax = [one, allDif];
  return gdax;
}
);

