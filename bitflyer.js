let exchangesInfo = require('./test.js');
module.exports = exchangesInfo.then( function (exchangesInfo) {
var bitflyer;
var one = ["binance", "okex", "hitbtc", "poloniex", "bitmex", "bitfinex", "gdax", "kraken", "bitstamp"];
var x = exchangesInfo.bitflyer.best_ask;
var allDif = [exchangesInfo.binance.bidPrice - x, exchangesInfo.okex.buy - x, exchangesInfo.hitbtc.bid - x, exchangesInfo.poloniex.highestBid - x, exchangesInfo.bitmex.close - x, exchangesInfo.bitfinex.bid - x, exchangesInfo.gdax.bid - x, exchangesInfo.kraken.b[0] - x, exchangesInfo.bitstamp.bid] - x;


  bitflyer = [one, allDif];
  return bitflyer;
}
);

