import test from 'tape'
import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {MemoryRouter} from 'react-router-dom'

import {setupJsdom} from '../jsdom'
import Market from '../../components/Market'

configure({ adapter: new Adapter() })
setupJsdom()

const mockMarket = {
  symbol: 'btcusd',
  bid: 6803.2,
  bid_size: 58.2869,
  ask: 6803.9,
  ask_size: 28.65,
  daily_change: 28.9,
  daily_change_perc: 0.0043,
  last_price: 6803.1,
  volume: 45938.15,
  high: 69.38,
  low: 65.32
}

const getMarketDetails = () => { }

const wrapper = mount(
  <MemoryRouter>
    <Market market={mockMarket} getMarketDetails={getMarketDetails} />
  </MemoryRouter>
)

test('Market component displays market properties', (t) => {
  t.deepEqual(
    (wrapper.find('svg').length),
    2
  )

  t.deepEqual(
    (wrapper.find('p').first().text()),
    'BID: 6803.2'
  )

  t.deepEqual(
    (wrapper.find('p').last().text()),
    'LOW: 65.32'
  )

  t.end()
})
