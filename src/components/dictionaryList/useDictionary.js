import {useState, useEffect} from 'react';
//import { useSelector, useDispatch } from "react-redux";
//import * as types from '../../redux/actions/actionTypes'
import * as dictionaryApi from '../../api/dictionaryApi';

const useDictionary = (initialDictionary) => {    
    //const dictionaries = useSelector(state => state.dictionaries);
    //const dispatch = useDispatch();
    const [dictionary,setDictionary] = useState(initialDictionary)
    useEffect(() => {
        const dictionaryColor = {name:'color'}
        dictionaryApi.setRow(dictionaryColor,'Grey Stone', 'Dark Grey')
    return () => {
        
        };
    },[]); 
    // const addDictionary = (dictionary) => dispatch({ type: types.ADD_DICTIONARY, dictionary });
    // const deleteDictionary = (dictionary) => dispatch({ type: types.DELETE_DICTIONARY, dictionary });
    const addRow = (row) => {
        //todo add row to dictionary
        setDictionary([...dictionary, row])
    }
    

    return {dictionary,addRow}
}

export default useDictionary
