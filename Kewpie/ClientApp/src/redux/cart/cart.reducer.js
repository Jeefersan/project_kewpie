import CartActionTypes from './cart.types';
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.CLEAR_ITEM:
      return {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, action.payload),
      };
    case CartActionTypes.CLEAR_ALL:
      return { ...state, cartItems: INITIAL_STATE.cartItems };
    default:
      return state;
  }
};

export default cartReducer;
