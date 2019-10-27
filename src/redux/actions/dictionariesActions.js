import * as types from './actionTypes';

export function loadDictionaries (dictionaries) {
	return { type: types.LOAD_DICTIONARIES, dictionaries };
}
