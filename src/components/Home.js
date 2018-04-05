import React, {Component} from 'react'
import styled from 'styled-components'

import {card, details, symbol} from '../styles/card'
import {mainWrapper} from '../styles/typography'
import {breakpoints} from '../styles/breakpoints'
import {Logo} from '../styles/icons'

export default class extends Component {
  render () {
    return (
      <Main>
        <Card>
          <Details>
            <Logo />
            <img className='home-image' src='http://usblogs.pwc.com/emerging-technology/wp-content/uploads/2017/05/blockchain-yellow-640x400.jpg' />
          </Details>
        </Card>
      </Main>
    )
  }
}

const Main = styled.div`
  ${mainWrapper()}
  margin: 80px 0 0 300px
`
const Card = styled.div`
  ${card()}
`
const Details = styled.div`
  ${details()}
`
const Symbol = styled.h2`
  ${symbol()}
`
