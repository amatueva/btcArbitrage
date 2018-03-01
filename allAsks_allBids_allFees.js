let exchangesInfo = require('./test.js');
module.exports = exchangesInfo.then( function (exchangesInfo) {
  var one = ["binance","okex", "hitbtc", "poloniex", "bitmex", "bitfinex", "gdax", "kraken", "bitflyer", "bitstamp"];
  var obj1 = {};
  var obj2 = {};
  var allAsks = [exchangesInfo.binance.askPrice * (1-0.001), exchangesInfo.okex.sell * (1-0.0005), exchangesInfo.hitbtc.ask * (1-0.001), exchangesInfo.poloniex.lowestAsk * (1-0.0025), exchangesInfo.bitmex.high * (1-0.00075), exchangesInfo.bitfinex.ask * (1-0.002), exchangesInfo.gdax.ask * (1-0.0025), exchangesInfo.kraken.a[0] * (1-0.0026), exchangesInfo.bitflyer.best_ask * (1-0.0025), exchangesInfo.bitstamp.ask * (1-0.0025)];
  var allBids = [exchangesInfo.binance.bidPrice * (1-0.001), exchangesInfo.okex.sell * (1-0.0003), exchangesInfo.hitbtc.bid * (1+0.0001), exchangesInfo.poloniex.highestBid * (1-0.0015), exchangesInfo.bitmex.close * (1+0.00025), exchangesInfo.bitfinex.bid * (1-0.001), exchangesInfo.gdax.bid, exchangesInfo.kraken.b[0] * (1-0.0016), exchangesInfo.bitflyer.best_bid * (1-0.0025), exchangesInfo.bitstamp.bid * (1-0.0025)];
  let i = 0;
  allAsks.map((market) => {
    obj1[one[i]] = market;
    i++;
  });
  let k = 0;
  allBids.map((market) => {
    obj2[one[k]] = market;
    k++;
  });
      console.log([obj1, obj2]);
      return [obj1, obj2];
  
}
);