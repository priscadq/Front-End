import { combineReducers } from 'redux';

import cartReducer from './cartReducer';
import homeReducer from './homeReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  home: homeReducer
});

export default rootReducer;