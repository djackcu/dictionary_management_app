import React from 'react'

function DictionariesElement({dictionary, deleteDictionary}) {
    return (
        <div className="dictionaries-element">
            <div className="dictionaries-element_name">{dictionary}</div>
            <div className="dictionaries-element_description">Description</div>
            <div className="dictionaries-element_btn_validate">Validate</div>
            <div className="dictionaries-element_btn_delete" onClick={()=>deleteDictionary(dictionary)}>X</div>
        </div>
    )
}

export default DictionariesElement
