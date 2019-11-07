import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import {Dictionary} from '../../utils/handler';

export default function dictionariesReducer(state = initialState.dictionaries, action) {
  switch (action.type) {
    case types.ADD_DICTIONARY:
      const newDictionary = new Dictionary({...action.dictionary,dataList:new Map()})
      return [...state,newDictionary];

    case types.DELETE_DICTIONARY:
      return state.filter((dict) => {
        return dict!==action.dictionary;
      })

    case types.VALIDATE_DICTIONARY:
          const  validateDictionary = new Dictionary(action.dictionary);
          validateDictionary.isValidated =  validateDictionary.detectConsistency();
          console.log( validateDictionary, action.dictionary);
          return[...state.map(dict => {return (dict.name ===  validateDictionary.name)? validateDictionary:dict})];

    case types.ADD_ROW:
        const addDictionaryRow = new Dictionary(action.dictionary).addRow(action.range,action.domain);
        console.log(addDictionaryRow, action.dictionary);
        return[...state.map(dict => {return (dict.name === addDictionaryRow.name)?addDictionaryRow:dict})];
    case types.DELETE_ROW:
        const deleteDictionaryRow = new Dictionary(action.dictionary).deleteRow(action.range,action.domain);
        console.log(deleteDictionaryRow, action.dictionary);
        return[...state.map(dict => {return (dict.name === deleteDictionaryRow.name)?deleteDictionaryRow:dict})];
    case types.UPDATE_ROW:
        const updateDictionaryRow = new Dictionary(action.dictionary).updateRow(action.range,action.domain);
        console.log(updateDictionaryRow, action.dictionary);
        return[...state.map(dict => {return (dict.name === updateDictionaryRow.name)?updateDictionaryRow:dict})];
    default:
      return state;
  }
}
