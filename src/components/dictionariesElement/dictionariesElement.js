import React from 'react'

function DictionariesElement({dictionary, deleteDictionary}) {
    return (
        <div className="dictionary-element">
            <div className="dictionary-element_name">{dictionary}</div>
            <div className="dictionary-element_description">Description</div>
            <div className="dictionary-element_btn_validate">Validate</div>
            <div className="dictionary-element_btn_delete" onClick={()=>deleteDictionary(dictionary)}>X</div>
        </div>
    )
}

export default DictionariesElement
