import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function dictionariesReducer(state = initialState.dictionaries, action) {
  switch (action.type) {
    case types.LOAD_DICTIONARIES:
      return action.dictionaries;
    default:
      return state;
  }
}
