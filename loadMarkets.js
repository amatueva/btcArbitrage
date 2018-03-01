"use strict";

const ccxt = require ('ccxt')

;(async () => {
    let hitbtc = new ccxt.hitbtc ()
    let markets1 = await hitbtc.load_markets ()
    // let bitfinex = new ccxt.bitfinex ()
    // let markets2 = await bitfinex.load_markets ()
    // let bitflyer = new ccxt.bitflyer ()
    // let markets3 = await bitflyer.load_markets ()
    // let bitstamp = new ccxt.bitstamp ()
    // let markets4 = await bitstamp.load_markets ()
    // let bitmex = new ccxt.bitmex ()
    // let markets5 = await bitmex.load_markets ()
    // let gdax = new ccxt.gdax ()
    // let markets6 = await gdax.load_markets ()
    // let okex = new ccxt.okex ()
    // let markets7 = await okex.load_markets ()
    // let poloniex = new ccxt.poloniex ()
    // let markets8 = await poloniex.load_markets ()
    // let kraken = new ccxt.kraken ()
    // let markets = await kraken.load_markets ()

    console.log ( markets1["BTC/USDT"]);
    // console.log ( "kraken :", markets["BTC/USD"].taker, markets["BTC/USD"].maker);
    // console.log ( "bitfinex :", markets2["BTC/USD"].taker, markets2["BTC/USD"].maker);
    // console.log ( "bitflyer :", markets3["BTC/USD"].taker, markets3["BTC/USD"].maker);
    // console.log ( "bitstamp :", markets4["BTC/USD"].taker, markets4["BTC/USD"].maker);
    // console.log ( "bitmex :", markets5["BTC/USD"].taker, markets5["BTC/USD"].maker);
    // console.log ( "gdax :", markets6["BTC/USD"].taker, markets6["BTC/USD"].maker);
    // console.log ( "okex :", markets7["BTC/USD"].taker, markets7["BTC/USD"].maker);
    // console.log ( "poloniex :", markets8["BTC/USDT"].taker, markets8["BTC/USDT"].maker);
}) ()