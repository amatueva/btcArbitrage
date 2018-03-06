let exchangesInfo = require('./test.js');
module.exports = exchangesInfo.then( function (exchangesInfo) {
var okex;
var one = ["binance", "hitbtc", "poloniex", "bitmex", "bitfinex", "gdax", "kraken", "bitflyer", "bitstamp"];
var x = exchangesInfo.okex.sell;
var allDif = [exchangesInfo.binance.bidPrice - x, exchangesInfo.hitbtc.bid - x, exchangesInfo.poloniex.highestBid - x, exchangesInfo.bitmex.close - x, exchangesInfo.bitfinex.bid - x, exchangesInfo.gdax.bid - x, exchangesInfo.kraken.b[0] - x, exchangesInfo.bitflyer.best_bid - x, exchangesInfo.bitstamp.bid - x];

  okex = [one, allDif];
  return okex;
}
);

