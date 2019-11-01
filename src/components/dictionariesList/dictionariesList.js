import React from 'react'
import useDictionaries from './useDictionaries';
import DictionariesElement from '../dictionariesElement/dictionariesElement';
import DictionariesForm from '../dictionariesForm/dictionariesForm';

function DictionariesList() {
    const {dictionaries, addDictionary, deleteDictionary} = useDictionaries();
    return (
        <div>
            <DictionariesForm  addDictionary={addDictionary}/>
            <div className="dictionary-list">
                {dictionaries.map((dict) => (
                <DictionariesElement dictionary={dict} key={dict.name} deleteDictionary={deleteDictionary}/>
                ))}
            </div>
        </div>
    )
}

export default DictionariesList
