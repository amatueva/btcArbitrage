let exchangesInfo = require('./test.js');
module.exports = exchangesInfo.then( function (exchangesInfo) {
var hitbtc;
var one = ["binance", "okex", "poloniex", "bitmex", "bitfinex", "gdax", "kraken", "bitflyer", "bitstamp"];
var x = exchangesInfo.hitbtc.ask;
var allDif = [x - exchangesInfo.binance.bidPrice, x - exchangesInfo.okex.buy, x - exchangesInfo.poloniex.highestBid, x - exchangesInfo.bitmex.close, x - exchangesInfo.bitfinex.bid, x - exchangesInfo.gdax.bid, x - exchangesInfo.kraken.b[0], x - exchangesInfo.bitflyer.best_bid, x - exchangesInfo.bitstamp.bid];

  hitbtc = [one, allDif];
  return hitbtc;
}
);

