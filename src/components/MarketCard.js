import React, {Component} from 'react'
import styled from 'styled-components'
import * as Icon from 'react-cryptocoins'

import {cardWrapper, card, details, detail, symbol} from '../styles/card'
import {Loader, Money} from '../styles/icons'
import {capitalizeFirstLetter} from '../utils'

export default class extends Component {
  componentDidMount() {
    const { market, currentID, getMarketDetails } = this.props
    if (currentID !== null) {
      getMarketDetails(currentID);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { market, currentID, getMarketDetails } = this.props

    if (nextProps.currentID !== currentID) {
      getMarketDetails(nextProps.currentID);
    }
  }

  render () {
    const {market} = this.props
    const iconExtension = capitalizeFirstLetter(market.symbol.substring(0, 3))
    const MarketIcon = Icon[iconExtension]

    return (
      <Market>
        <CardWrapper>
          <Card>
            <Details>
              {MarketIcon === undefined ? <Money /> : <MarketIcon />}
              <Symbol>{market.symbol}</Symbol>
              {market.bid === undefined ? <Loader /> : (
                <div>
                  <Detail>{market.bid}</Detail>
                  <Detail>{market.bid_size}</Detail>
                  <Detail>{market.ask}</Detail>
                  <Detail>{market.ask_size}</Detail>
                  <Detail>{market.daily_change}</Detail>
                  <Detail>{market.daily_change_perc}</Detail>
                  <Detail>{market.last_price}</Detail>
                  <Detail>{market.volume}</Detail>
                  <Detail>{market.high}</Detail>
                  <Detail>{market.low}</Detail>
                </div>
              )}
            </Details>
          </Card>
        </CardWrapper>
      </Market>
    )
  }
}

const Market = styled.div`
  margin: 40px 80px;
  width: 100%;

  svg {
    margin-right: 10px;
    vertical-align: sub;
  }
  .loader-icon {
    margin-right: 0;
    margin: 80px auto;
    display: block;
  }
`
const CardWrapper = styled.div`
  ${cardWrapper()}
`
const Card = styled.div`
  ${card()}
`
const Details = styled.div`
  ${details()}
`
const Detail = styled.p`
  ${detail()}
`
const Symbol = styled.h2`
  ${symbol()}
`
