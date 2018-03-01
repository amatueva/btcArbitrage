let exchangesInfo = require('./test.js');
module.exports = exchangesInfo.then( function (exchangesInfo) {
  var binance;
  var one = ["okex", "hitbtc", "poloniex", "bitmex", "bitfinex", "gdax", "kraken", "bitflyer", "bitstamp"];
  var x = exchangesInfo.binance.askPrice;
  var allDif = [x - exchangesInfo.okex.buy, x - exchangesInfo.hitbtc.bid, x - exchangesInfo.poloniex.highestBid, x - exchangesInfo.bitmex.close, x - exchangesInfo.bitfinex.bid, x - exchangesInfo.gdax.bid, x - exchangesInfo.kraken.b[0], x - exchangesInfo.bitflyer.best_bid, x - exchangesInfo.bitstamp.bid];
    binance = [one, allDif];
    return binance;
}
);

