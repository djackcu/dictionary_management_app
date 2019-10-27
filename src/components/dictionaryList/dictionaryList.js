import React from 'react'
import useDictionaries from './useDictionaries';
import DictionaryElement from '../dictionaryElement/dictionaryElement';
import DictionaryForm from '../dictionaryForm/dictionaryForm';

function DictionaryList() {
    const {dictionaries, addDictionary} = useDictionaries();
    return (
        <div>
            <DictionaryForm  addDictionary={addDictionary}/>
            <div className="dictionary-list">
                {dictionaries.map((dict) => (
                <DictionaryElement dictionary={dict} key={dict}/>
                ))}
            </div>
        </div>
    )
}

export default DictionaryList
