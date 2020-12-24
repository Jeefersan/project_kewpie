import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from '../redux/cart/cart.reducer';
import shopReducer from '../redux/shop/shop.reducer';
import headerReducer from '../redux/header/header.reducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  header: headerReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

export default persistReducer(persistConfig, rootReducer);
