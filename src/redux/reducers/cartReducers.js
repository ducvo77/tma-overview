import actionTypes from "../actions/actionTypes";

const initialState = {
  numOfItems: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREASE_ITEM:
      return {
        ...state,
        numOfItems: state.numOfItems + action.payload,
      };

    case actionTypes.DECREASE_ITEM:
      return {
        ...state,
        numOfItems: state.numOfItems - action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
