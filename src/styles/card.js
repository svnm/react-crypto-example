import styled from 'styled-components'
import {fonts} from './fonts'
import {colors} from './colors'

export const card = () => {
  return `
    display: flex;
    flex-direction: column;
    position: relative;
  `
}

export const details = () => {
  return `
    padding: 0 20px;
  `
}

export const detail = () => {
  return `
    color: ${colors.$grey_dark};
    font-size: 16px;
    line-height: 1.4;
    margin-bottom: 14px;
  `
}

export const symbol = () => {
  return `
    display: inline-block;
    font-size: 28px;
    font-weight: 700;
    font-family: ${fonts.$serif};
    line-height: 1.2;
    margin-bottom: 15px;
  `
}
