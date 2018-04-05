import React, { Component } from 'react'
import { render } from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import {MarketContainer} from './containers/MarketContainer'
import {MarketSymbolsContainer} from './containers/MarketSymbolsContainer'
import Home from './components/Home'

import {store} from './store'

require('./styles/typography')

class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className='main'>
            <MarketSymbolsContainer />
            <Route exact path='/' component={Home} />
            <Route path='/markets/:id' component={MarketContainer} />
          </div>
        </HashRouter>
      </Provider>
    )
  }
}

class App extends Component {
  render () {
    return (
      <div>
        <Main />
      </div>
    )
  }
}

render((
  <App />
), document.getElementById('root'))
