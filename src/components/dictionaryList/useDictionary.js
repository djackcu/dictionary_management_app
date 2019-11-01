import {useState} from 'react';
//import { useSelector, useDispatch } from "react-redux";
//import * as types from '../../redux/actions/actionTypes'

const useDictionary = (initialDictionary) => {    
    //const dictionaries = useSelector(state => state.dictionaries);
    //const dispatch = useDispatch();
    const [dictionary,setDictionary] = useState(initialDictionary)
    /* useEffect(() => {
        
    return () => {
        
        };
    },[dictionary]); */
    // const addDictionary = (dictionary) => dispatch({ type: types.ADD_DICTIONARY, dictionary });
    // const deleteDictionary = (dictionary) => dispatch({ type: types.DELETE_DICTIONARY, dictionary });
    const addRow = (row) => {
        //todo add row to dictionary
        setDictionary([...dictionary, row])
    }
    

    return {dictionary,addRow}
}

export default useDictionary
