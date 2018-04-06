// @flow

import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import {colors} from '../styles/colors'
import {breakpoints} from '../styles/breakpoints'
import {Logo} from '../styles/icons'
import type { Market } from '../types/Market'

type Props = {
  markets: Array<Market>,
  getMaketSymbols: Function,
  location: any
}

export default class extends Component<Props> {
  componentWillMount() {
    const { getMaketSymbols } = this.props
    getMaketSymbols()
  }

  render () {
    const {markets, location} = this.props
    const match = location.pathname.replace('/markets/', '')

    return (
      <SymbolList>
        <Link to='/'>
          <Logo />
        </Link>
        <ul>
          {markets.map((market, i ) => {
            return <li key={i}>
              <Link className={match === market.symbol ? 'active' : ''} to={`/markets/${market.symbol}`}>
                {market.symbol}
              </Link>
            </li>
          })}
        </ul>
      </SymbolList>
    )
  }
}

const SymbolList = styled.div`
  position: fixed;
  top: 0; left: 0; bottom: 0;
  width: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 15px 0 30px 30px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);

  @media (max-width: ${breakpoints.$break_small}) {
    position: static;
    width: 100%
    height: 230px;
  }

  a,
  span {
    text-decoration: none;
    padding: 2px 3px 2px 3px;
  }

  ul {
    padding: 0;
    margin-top: 0;
    margin-bottom: 0;

    li {
      text-overflow: ellipsis;
      white-space: nowrap;
      list-style: none;
      padding-bottom: 6px;
    }

    a {
      color: ${colors.$grey_dark};
    }

    a:hover,
    a.active {
      background: ${colors.$light_yellow};
    }
  }

  .logo-icon {
    display: block;
    margin-bottom: 20px;
    margin-left: 4px;
    width: 140px;
  }
`
