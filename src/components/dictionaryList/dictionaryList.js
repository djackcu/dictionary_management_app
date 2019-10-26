import React from 'react'
import DictionaryElement from '../dictionaryElement/dictionaryElement';
import DictionaryForm from '../dictionaryForm/dictionaryForm';

function DictionaryList({dictionaries}) {
    
    return (
        <div>
            <DictionaryForm/>
            <div className="dictionary-list">
                {dictionaries.map((dict) => (
                <DictionaryElement dictionary={dict} key={dict}/>
                ))}
            </div>
        </div>
    )
}

export default DictionaryList
