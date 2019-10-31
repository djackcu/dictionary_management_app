import React from 'react'
import useDictionary from './useDictionary';
import DictionaryElement from '../dictionaryElement/dictionaryElement';
import DictionaryForm from '../dictionaryForm/dictionaryForm'

function DictionariesList() {
    const initialDict =  [ 
        { range: 'Dark Grey', domain: 'StoneGrey' },
        { range: 'Dark Grey', domain: 'Grey Cloud' },
        { range: 'Turquoise', domain: 'Caribean Sea' }
        ];
    const {dictionary,addRow} = useDictionary(initialDict);
    return (
        <div>
            <DictionaryForm addRow={addRow}/>
            <div className="dictionary-list">
                {dictionary.map((dict) => (
                <DictionaryElement dictionary={dict} key={dict.domain}/>
                ))}
            </div>
        </div>
    )
}

export default DictionariesList
