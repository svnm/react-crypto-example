import test from 'tape'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import {getMaketSymbols, getMarketDetails} from '../../../store/markets/actions'
import marketSymbols from '../../../utils/marketSymbols.json'

const initialState = {
  markets: [],
  isFetching: false
}

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

test('getMaketSymbols action', (t) => {
  const store = mockStore(initialState)
  store.dispatch(getMaketSymbols())
  let markets = []
  marketSymbols.forEach((data, i) => markets.push({symbol: data}))

  t.deepEqual(
    store.getActions(),
    [
      { type: 'GET_MARKET_SYMBOLS_FETCHING' },
      { type: 'GET_MARKET_SYMBOLS_SUCCESS', markets: markets }
    ],
    'getMaketSymbols() should return market symbols'
  )

  t.end()
})

fetchMock.get(
  `https://api.bitfinex.com/v2/ticker/tBTCUSD`,
  [6803.2, 58.2869, 6803.9, 28.65, 28.9, 0.0043, 6803.1, 45938.15, 69.38, 65.32]
)

test('getMarketDetails action', (t) => {
  const store = mockStore(initialState)
  const market = {}

  return store.dispatch(getMarketDetails('btcusd'))
    .then(() => {
      const actions = store.getActions()
      t.deepEqual(
        store.getActions(),
        [
          { type: 'GET_MARKET_DETAILS_FETCHING' },
          {
            market: { symbol: 'btcusd', bid: 6803.2, bid_size: 58.2869, ask: 6803.9, ask_size: 28.65, daily_change: 28.9, daily_change_perc: 0.0043, last_price: 6803.1, volume: 45938.15, high: 69.38, low: 65.32 },
            type: 'GET_MARKET_DETAILS_SUCCESS'
          }
        ],
        'getMarketDetails() should return market details'
      )
      t.end()
    })
})
