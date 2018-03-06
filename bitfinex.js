let exchangesInfo = require('./test.js');
module.exports = exchangesInfo.then( function (exchangesInfo) {
var bitfinex;
var one = ["binance", "okex", "hitbtc", "poloniex", "bitmex", "gdax", "kraken", "bitflyer", "bitstamp"];
var x = exchangesInfo.bitfinex.ask;
var allDif = [exchangesInfo.binance.bidPrice - x, exchangesInfo.okex.buy - x, exchangesInfo.hitbtc.bid - x, exchangesInfo.poloniex.highestBid - x, exchangesInfo.bitmex.close - x,exchangesInfo.gdax.bid - x, exchangesInfo.kraken.b[0] - x, exchangesInfo.bitflyer.best_bid - x, exchangesInfo.bitstamp.bid - x];

  bitfinex = [one, allDif];
  return bitfinex;
}
);

