require('babel-register')
require('babel-polyfill')

require('./store/markets/actions.spec.js')
require('./components/Home.spec.js')
require('./components/Market.spec.js')
