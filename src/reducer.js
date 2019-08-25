import { MY_ACTION } from "./actionTypes";

const defaultState = {
    value: 'Default Store Value'
};

export default function handler(state = defaultState, action) {
  switch (action.type) {
    case MY_ACTION:
        return { value: action.text }
    default:
      return state;
  };
};