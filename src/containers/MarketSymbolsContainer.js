import React, {Component} from 'react'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'

import SymbolList from '../components/SymbolList'
import { getMaketSymbols } from '../store/markets/actions'

const mapDispatchToProps = dispatch => {
  return {
    getMaketSymbols: () => dispatch(getMaketSymbols())
  }
}

const mapStateToProps = ({ markets }) => {
  return {
    markets: markets.markets
  }
}

export const MarketSymbolsContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(
  SymbolList
))
