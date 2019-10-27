import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function dictionariesReducer(state = initialState.dictionaries, action) {
  switch (action.type) {
    case types.ADD_DICTIONARY:
      return [...state,action.dictionary];
    default:
      return state;
  }
}
