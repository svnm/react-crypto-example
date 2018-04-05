import {
  GET_MARKET_SYMBOLS_ERROR,
  GET_MARKET_SYMBOLS_FETCHING,
  GET_MARKET_SYMBOLS_SUCCESS,
  GET_MARKET_DETAILS_ERROR,
  GET_MARKET_DETAILS_FETCHING,
  GET_MARKET_DETAILS_SUCCESS
} from './constants'

const initialState = {
  markets: [],
  isFetching: false
}

export const markets = (state = initialState, action) => {
  switch (action.type) {
    case GET_MARKET_SYMBOLS_ERROR:
      return {
        ...state,
        isFetching: false
      };

    case GET_MARKET_SYMBOLS_FETCHING:
      return {
        ...state,
        isFetching: true
      };

    case GET_MARKET_SYMBOLS_SUCCESS:
      return {
        ...state,
        markets: action.markets,
        isFetching: false
      };

    case GET_MARKET_DETAILS_ERROR:
      return {
        ...state,
        isFetching: false
      };

    case GET_MARKET_DETAILS_FETCHING:
      return {
        ...state,
        isFetching: true
      };

    case GET_MARKET_DETAILS_SUCCESS:
      const { market } = action;
      const { markets } = state;
      const index = markets.findIndex(({ symbol }) => symbol === market.symbol);
      markets[index] = market;

      return {
        ...state,
        markets: [...markets]
      };

    default:
      return state;
  }
}
