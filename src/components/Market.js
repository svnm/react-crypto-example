// @flow

import React, {Component} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import * as Icon from 'react-cryptocoins'

import {card, details, detail, symbol} from '../styles/card'
import {mainWrapper} from '../styles/typography'
import {colors} from '../styles/colors'
import {breakpoints} from '../styles/breakpoints'
import {Loader, Money, Back} from '../styles/icons'
import {capitalizeFirstLetter} from '../utils'
import type { Market } from '../types/Market'

type Props = {
  market: Market,
  currentID: string,
  getMarketDetails: Function
}

export default class extends Component<Props> {
  componentDidMount() {
    const { market, currentID, getMarketDetails } = this.props
    if (currentID !== null) {
      getMarketDetails(currentID);
    }
  }

  componentWillReceiveProps(nextProps: Props) {
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
      <Main>
        <Card>
          <Link to='/'>
            <Back />
          </Link>
          <Details>
            {MarketIcon === undefined ? <Money /> : <MarketIcon color={colors.$yellow} />}
            <Symbol>{market.symbol}</Symbol>
            {market.bid === undefined ? <Loader /> : (
              <div>
                <Detail>
                  <span><strong>BID: </strong></span>
                  <span>{market.bid}</span>
                </Detail>
                <Detail>
                  <span><strong>BID SIZE: </strong></span>
                  <span>{market.bid_size}</span>
                </Detail>
                <Detail>
                  <span><strong>ASK: </strong></span>
                  <span>{market.ask}</span>
                </Detail>
                <Detail>
                  <span><strong>ASK SIZE: </strong></span>
                  <span>{market.ask_size}</span>
                </Detail>
                <Detail>
                  <span><strong>DAILY CHANGE: </strong></span>
                  <span>{market.daily_change}</span>
                </Detail>
                <Detail>
                  <span><strong>DAILY CHANGE PERCENT: </strong></span>
                  <span>{market.daily_change_perc}</span>
                </Detail>
                <Detail>
                  <span><strong>LAST PRICE: </strong></span>
                  <span>{market.last_price}</span>
                </Detail>
                <Detail>
                  <span><strong>VOLUME: </strong></span>
                  <span>{market.volume}</span>
                </Detail>
                <Detail>
                  <span><strong>HIGH: </strong></span>
                  <span>{market.high}</span>
                </Detail>
                <Detail>
                  <span><strong>LOW: </strong></span>
                  <span>{market.low}</span>
                </Detail>
              </div>
            )}
          </Details>
        </Card>
      </Main>
    )
  }
}

const Main = styled.div`
  ${mainWrapper()}
  margin: 15px 0 0 300px
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
