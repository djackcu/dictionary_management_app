import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import * as types from '../../redux/actions/actionTypes'
import * as dictionaryApi from '../../api/dictionaryApi';
import {Dictionary} from '../../utils/handler';

const useDictionary = (initialDictionary) => {    
    
    const dictionary = useSelector(state => state.dictionaries.find((dict => dict.name === initialDictionary)));
    const dispatch = useDispatch();
    
    const [dataList, setDataList] = useState(new Dictionary(dictionary).getList())
    useEffect(() => {
        setDataList(new Dictionary(dictionary).getList())
        new Dictionary(dictionary).getList().forEach((row) => {
            dictionaryApi.setRow(dictionary.name,row.domain,row.range);
        })
    return () => {
        localStorage.clear();
        };
    },[dictionary]);
    const addRow = (row) =>dispatch({ type: types.ADD_ROW, dictionary:dictionary, range:row.range, domain:row.domain });
    const deleteRow = (row) => dispatch({ type: types.DELETE_ROW, dictionary:dictionary, range:row.range, domain:row.domain });
    const updateRow = (row) => dispatch({ type: types.UPDATE_ROW, dictionary:dictionary, range:row.range, domain:row.domain });
    

    return {dataList, addRow, deleteRow,updateRow}
}

export default useDictionary
