import React from 'react'
import {Link} from "react-router-dom";

function DictionaryElement({dictionary, deleteDictionary, validateDictionary}) {
    return (
        <div className="dictionary-element">
            <div className="dictionary-element_first btn"><Link to={`/${dictionary.name}`}>{dictionary.name}</Link></div>
            <div className="dictionary-element_second">{dictionary.description}</div>
            <div className="dictionary-element_third" style={(dictionary.isValid())?{'color':'green'}:{'color':'red'}}>{(dictionary.isValid())?'Valid':'Invalid'}</div>
            <div className="dictionary-element_btn_delete btn" onClick={()=>deleteDictionary(dictionary)}>X</div>
        </div>
    )
}

export default DictionaryElement
