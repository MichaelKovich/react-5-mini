// ACTION TYPES
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// ACTION CREATORS
export function increment(value) {
  return {
    type: INCREMENT,
    payload: value,
  }
}

export function decrement(value) {
  return {
    type: DECREMENT,
    payload: value,
  }
}

const initialState = {
  currentValue: 0,
};


export default function counter(state = initialState, action) {
  switch(action.type) {
    case INCREMENT:
    // const currentValue = state.currentValue += action.payload;
      return Object.assign({}, state, {currentValue: state.currentValue + action.payload});
      // return Object.assign({}, state, {currentValue});

    case DECREMENT:
      return Object.assign({}, state, {currentValue: state.currentValue - action.payload});

    default:
      return state;
  }
}