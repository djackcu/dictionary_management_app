import * as types from './actionTypes';

export function addDictionary (dictionary) {
	return { type: types.ADD_DICTIONARY, dictionary };
}
