import HeaderActionTypes from './header.types';

const INITIAL_STATE = {
  isMenuHidden: true,
};

const headerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HeaderActionTypes.TOGGLE_MENU_HIDDEN:
      return { ...state, isMenuHidden: !state.isMenuHidden };
    case HeaderActionTypes.SET_MENU_HIDDEN:
      return { ...state, isMenuHidden: true };
    default:
      return state;
  }
};

export default headerReducer;
