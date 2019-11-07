import React, {useState} from 'react'

function DictionaryElement({row, deleteRow,updateRow}) {
    const [range, setRange] = useState(row.range);
    const [editMode, setEditMode] = useState(false)
    const handlerUpdateDictionary = () => {
        updateRow({...row,range});
        setRange(row.range);
        setEditMode(false);
    };
    return (
        <div className="dictionaries-element">
            <div className="dictionaries-element_name">{row.domain}</div>
            {(!editMode)?(
                <>
                <div className="dictionaries-element_description">{row.range}</div>
                <div className="dictionaries-element_btn_validate btn" 
                    onClick={() => {
                    setEditMode(!editMode)
                }}>Edit</div>
                </>
            ):(
                <>
                <input type="text" 
            name="range" 
            className="dictionary-form-edit_text" 
            value={range} 
            onChange={(e) => { 
                setRange(e.target.value)    
            }}/>
            <div className="dictionaries-element_btn_validate btn" 
                onClick={handlerUpdateDictionary}>Save</div>
                </>
            )}
            
            <div className="dictionaries-element_btn_delete btn" onClick={()=>deleteRow(row)}>X</div>
        </div>
    )
}

export default DictionaryElement
