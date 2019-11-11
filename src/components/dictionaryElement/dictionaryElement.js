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
        <div className="dictionary-element" style={(row.marker ==='ok')?{'color':'green'}:{'color':'red'}}>
            <div className="dictionary-element_first">{row.domain}</div>
            {(!editMode)?(
                <>
                <div className="dictionary-element_second">{row.range}</div>
            {(row.marker !=='ok')?(<div>{row.marker}</div>):null}
                <div className="dictionary-element_third btn" 
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
            <div className="dictionary-element_third btn" 
                onClick={handlerUpdateDictionary}>Save</div>
                </>
            )}
            
            <div className="dictionary-element_btn_delete btn" onClick={()=>deleteRow(row)}>X</div>
        </div>
    )
}

export default DictionaryElement
