// @flow

import {
  GET_MARKET_SYMBOLS_ERROR,
  GET_MARKET_SYMBOLS_FETCHING,
  GET_MARKET_SYMBOLS_SUCCESS,
  GET_MARKET_DETAILS_ERROR,
  GET_MARKET_DETAILS_FETCHING,
  GET_MARKET_DETAILS_SUCCESS
} from './constants'

import { fetchJSON } from '../../utils';
import marketSymbols from '../../utils/marketSymbols.json'

export const getMaketSymbols = () => async (
  dispatch: Function,
  getState: Function
) => {
  const { markets: { isFetching } } = getState();

  if (!isFetching) {
    dispatch({ type: GET_MARKET_SYMBOLS_FETCHING });

    try {
      /* does not seem to work, needs authentication */
      /* const marketSymbols = await fetchJSON(`v1/symbols`) */
      let markets = []
      marketSymbols.forEach((data, i) => markets.push({symbol: data}))
      dispatch({ markets, type: GET_MARKET_SYMBOLS_SUCCESS });
    } catch (error) {
      dispatch({ type: GET_MARKET_SYMBOLS_ERROR });
    }
  }
};

export const getMarketDetails = (id: string) => async (dispatch: Function) => {
  try {
    dispatch({ type: GET_MARKET_DETAILS_FETCHING });
    const marketDetails = await fetchJSON(`ticker/t${id.toUpperCase()}`)
    let market = {symbol: id}
    const marketProps = [
      'bid',
      'bid_size',
      'ask',
      'ask_size',
      'daily_change',
      'daily_change_perc',
      'last_price',
      'volume',
      'high',
      'low'
    ]
    marketDetails.forEach((data, i) => market[marketProps[i]] = data);

    dispatch({
      market,
      type: GET_MARKET_DETAILS_SUCCESS
    });

  } catch (error) {
    dispatch({ type: GET_MARKET_DETAILS_ERROR });
  }
};
