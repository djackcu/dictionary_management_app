import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function dictionariesReducer(state = initialState.dictionaries, action) {
  switch (action.type) {
    case types.ADD_DICTIONARY:
      const newDictionary = {...action.dictionary,dataList:[]}
      return [...state,newDictionary];
    case types.DELETE_DICTIONARY:
      return state.filter((dict) => {
        return dict!==action.dictionary;
      })
    default:
      return state;
  }
}
