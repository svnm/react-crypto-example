import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import {colors} from '../styles/colors'
import {Logo} from '../styles/icons'

export default class extends Component {
  componentWillMount() {
    const { getMaketSymbols } = this.props
    getMaketSymbols();
  }

  render () {
    const {markets, location} = this.props
    const match = location.pathname.replace('/markets/', '')

    return (
      <SymbolList>
        <Logo />
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
  font-size: 12px;
  width: 300px;

  .active a {
    background: #ffff00 !important;
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
      overflow: hidden;
      list-style: none;
      padding-bottom: 5px;
    }

    a {
      color: #333333;
    }

    a.hover,
    a:hover,
    a.active {
      background: #ffff00;
      color: #333333;
    }
  }

  .logo-icon {
    display: block;
    margin-bottom: 20px;
    width: 140px;
  }
`
