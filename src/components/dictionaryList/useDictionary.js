import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import * as types from '../../redux/actions/actionTypes'
import * as dictionaryApi from '../../api/dictionaryApi';
import {Dictionary} from '../../utils/handler';

const useDictionary = (initialDictionary) => {    
    
    const dictionary = useSelector(state => state.dictionaries.find((dict => dict.name === initialDictionary)));
    const dispatch = useDispatch();
    
    const [dataList, setDataList] = useState(new Dictionary(dictionary).getValidatedList())
    useEffect(() => {
        setDataList(new Dictionary(dictionary).getValidatedList())
        new Dictionary(dictionary).getList().forEach((row) => {
            dictionaryApi.setRow(dictionary.name,row.domain,row.range);
        })
    return () => {
        
        };
    },[dictionary]);
    const addRow = (row) =>dispatch({ type: types.ADD_ROW, dictionary:dictionary, range:row.range, domain:row.domain });
    const deleteRow = (row) => {
        dictionaryApi.deleteRow(dictionary.name,row.domain,row.range);
        return dispatch({ type: types.DELETE_ROW, dictionary:dictionary, range:row.range, domain:row.domain })};
    const updateRow = (row) => dispatch({ type: types.UPDATE_ROW, dictionary:dictionary, range:row.range, domain:row.domain });
    

    return {dataList, addRow, deleteRow,updateRow} 
}

export default useDictionary
