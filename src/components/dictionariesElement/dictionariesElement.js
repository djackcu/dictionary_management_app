import React from 'react'

function DictionaryElement({dictionary, deleteDictionary}) {
    return (
        <div className="dictionaries-element">
            <div className="dictionaries-element_name">{dictionary.name}</div>
            <div className="dictionaries-element_description">{dictionary.description}</div>
            <div className="dictionaries-element_btn_validate btn">Validate</div>
            <div className="dictionaries-element_btn_delete btn" onClick={()=>deleteDictionary(dictionary)}>X</div>
        </div>
    )
}

export default DictionaryElement
