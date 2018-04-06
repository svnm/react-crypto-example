import test from 'tape'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {getMaketSymbols} from '../../../store/markets/actions'
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
