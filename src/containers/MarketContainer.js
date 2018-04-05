import React, {Component} from 'react'
import { connect } from 'react-redux'

import Market from '../components/Market'
import { getMarketDetails } from '../store/markets/actions'

const mapDispatchToProps = dispatch => {
  return {
    getMarketDetails: id => dispatch(getMarketDetails(id))
  }
}

const mapStateToProps = ({ markets }, { match }) => {
  const currentID = match.params.id
  const market = markets.markets.find(({ symbol }) => symbol === currentID)
  return {
    market,
    currentID
  }
}

export const MarketContainer = connect(mapStateToProps, mapDispatchToProps)(
  Market
)
