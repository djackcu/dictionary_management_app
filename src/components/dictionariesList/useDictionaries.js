import {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import * as types from '../../redux/actions/actionTypes'
import * as dictionaryApi from '../../api/dictionaryApi';

const useDictionaries = () => {    
    const dictionaries = useSelector(state => state.dictionaries);
    const dispatch = useDispatch();
    useEffect(() => {
    dictionaryApi.setDictionary(dictionaries);
    return () => {
        //localStorage.clear();
        };
    },[dictionaries]);
    const addDictionary = (dictionary) => dispatch({ type: types.ADD_DICTIONARY, dictionary });
    const deleteDictionary = (dictionary) => dispatch({ type: types.DELETE_DICTIONARY, dictionary });
    const validateDictionary = (dictionary) => dispatch({ type: types.VALIDATE_DICTIONARY, dictionary });
    

    return {dictionaries, addDictionary, deleteDictionary,validateDictionary}
}

export default useDictionaries
