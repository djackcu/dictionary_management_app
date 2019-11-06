import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import {Dictionary} from '../../utils/handler';

export default function dictionariesReducer(state = initialState.dictionaries, action) {
  switch (action.type) {
    case types.ADD_DICTIONARY:
      const newDictionary = new Dictionary({...action.dictionary,dataList:[]})
      return [...state,newDictionary];
    case types.DELETE_DICTIONARY:
      return state.filter((dict) => {
        return dict!==action.dictionary;
      })
    case types.ADD_ROW:
        return[...state];
    case types.DELETE_ROW:
      return[...state];
    case types.UPDATE_ROW:
      return[...state];
    default:
      return state;
  }
}
