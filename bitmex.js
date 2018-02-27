let exchangesInfo = require('./test.js');
module.exports = exchangesInfo.then( function (exchangesInfo) {
var bitmex;
var one = ["binance", "okex", "hitbtc", "poloniex", "bitfinex", "gdax", "kraken", "bitflyer", "bitstamp"];
var x = exchangesInfo.bitmex.high;
var allDif = [x - exchangesInfo.binance.bidPrice, x - exchangesInfo.okex.buy, x - exchangesInfo.hitbtc.bid, x - exchangesInfo.poloniex.highestBid, x - exchangesInfo.bitfinex.bid, x - exchangesInfo.gdax.bid, x - exchangesInfo.kraken.b[0], x - exchangesInfo.bitflyer.best_bid, x - exchangesInfo.bitstamp.bid];


  bitmex = [one, allDif];
  return bitmex;
}
);

