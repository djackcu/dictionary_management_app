import React from 'react'
import useDictionary from './useDictionary';
import DictionaryElement from '../dictionaryElement/dictionaryElement';
import DictionaryForm from '../dictionaryForm/dictionaryForm'
import {useParams} from "react-router-dom";

function DictionaryList() {
    const { name } = useParams();
    const {dataList, addRow, deleteRow,updateRow} = useDictionary(name);
    //console.log(dataList);
    return (
        <div>
            <DictionaryForm addRow={addRow}/>
            <div className="dictionary-list">
                {dataList.map((row) => (
                <DictionaryElement row={row} key={row.domain+row.range} deleteRow={deleteRow} updateRow={updateRow}/>
                ))}
            </div>
        </div>
    )
}

export default DictionaryList
