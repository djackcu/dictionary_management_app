import React from 'react'

function DictionaryElement({dictionary, deleteDictionary, validateDictionary}) {
    return (
        <div className="dictionaries-element">
            <div className="dictionaries-element_name">{dictionary.name}</div>
            <div className="dictionaries-element_description">{dictionary.description}</div>
            <div className="dictionaries-element_btn_validate btn" style={(dictionary.isValidated)?{'color':'green'}:{'color':'red'}} onClick={()=>validateDictionary(dictionary)}>Validate</div>
            <div className="dictionaries-element_btn_delete btn" onClick={()=>deleteDictionary(dictionary)}>X</div>
        </div>
    )
}

export default DictionaryElement
