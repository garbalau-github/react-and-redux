// Combining reducers

import { combineReducers } from 'redux';

import accountReducer from './accountReducer';
import cartReducer from './cartReducer';

const reducers = combineReducers({
  account: accountReducer,
  cart: cartReducer,
});

export default reducers;
