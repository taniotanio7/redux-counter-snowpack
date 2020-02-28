import { createStore } from "redux";

const ADD = "ADD";
const SUBTRACK = "SUBTRACK";

const defaultState = {
  count: 0,
};

function add() {
  return {
    type: ADD,
  };
}

function subtrack() {
  return {
    type: SUBTRACK,
  };
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case ADD:
      return { count: state.count + 1 };
    case SUBTRACK:
      if (state.count <= 0) {
        return state;
      }
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default createStore(reducer);
export { add, subtrack, ADD, SUBTRACK };
