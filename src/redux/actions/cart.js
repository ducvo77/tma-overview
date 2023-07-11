import actionTypes from "./actionTypes";

const addItem = (payload = 1) => {
  return {
    type: actionTypes.INCREASE_ITEM,
    payload,
  };
};

const deleteItem = (payload = 1) => {
  return {
    type: actionTypes.DECREASE_ITEM,
    payload,
  };
};

export { addItem, deleteItem };
