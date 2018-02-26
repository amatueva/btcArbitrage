const ccxt = require ('ccxt')
const symbol = 'BTC/USDT'
const exchanges = [ 'binance', 'okex', 'hitbtc', 'poloniex']
const exchangesInfo = {};
;(async () => {

    const result = await Promise.all (exchanges.map (async id => {

        const exchange = new ccxt[id] ({ 'enableRateLimit': true })
        const ticker = await exchange.fetchTicker (symbol)
        return exchange.extend ({ 'exchange': id }, ticker )

    }))
    result.forEach(function (market) {
        exchangesInfo[market.exchange] = market.info;
    })

}) ()
const symbol2 = 'BTC/USD'
const exchanges2 = [ 'bitmex', 'bitfinex', 'gdax', 'kraken','bitflyer', 'bitstamp']
;(async () => {

    const result = await Promise.all (exchanges2.map (async id => {

        const exchange = new ccxt[id] ({ 'enableRateLimit': true })
        const ticker = await exchange.fetchTicker (symbol2)
        return exchange.extend ({ 'exchange': id }, ticker )

    }))
    result.forEach(function (market) {
        exchangesInfo[market.exchange] = market.info;
    })
}) ()
module.exports = exchangesInfo;
//usd = 'bitmex', 'huobi', 'bitfinex', 'gdax'
//upbit, bithump = krw
