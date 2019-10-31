import React from 'react'

function DictionaryElement({dictionary}) {
    return (
        <div className="dictionaries-element">
            <div className="dictionaries-element_name">{dictionary.domain}</div>
            <div className="dictionaries-element_description">{dictionary.range}</div>
            <div className="dictionaries-element_btn_validate">Edit</div>
            <div className="dictionaries-element_btn_delete">X</div>
        </div>
    )
}

export default DictionaryElement
