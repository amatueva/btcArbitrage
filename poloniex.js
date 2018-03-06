let exchangesInfo = require('./test.js');
module.exports = exchangesInfo.then( function (exchangesInfo) {
var poloniex;
var one = ["binance", "okex", "hitbtc", "bitmex", "bitfinex", "gdax", "kraken", "bitflyer", "bitstamp"];
var x = exchangesInfo.poloniex.lowestAsk;
var allDif = [exchangesInfo.binance.bidPrice - x, exchangesInfo.okex.buy - x, exchangesInfo.hitbtc.bid - x, exchangesInfo.bitmex.close - x, exchangesInfo.bitfinex.bid - x, exchangesInfo.gdax.bid - x, exchangesInfo.kraken.b[0] - x, exchangesInfo.bitflyer.best_bid - x, exchangesInfo.bitstamp.bid - x];

  poloniex = [one, allDif];
  return poloniex;
}
);

