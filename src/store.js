import { createStore } from "redux";

const defaultState = {
  count: 0,
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default createStore(reducer);
