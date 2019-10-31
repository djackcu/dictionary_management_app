import React,{useState} from 'react'

function DictionariesForm({addRow}) {
    const [row, setRow] = useState({domain:'',range:''});
    const handlerAddDictionary = () => {
        addRow(row);
        setRow('');
    };
    return (
        <div className="dictionary-form">
            <input type="text" 
            name="domain" 
            className="dictionary-form-add_text" 
            value={row.domain} 
            onChange={(e) => { 
                setRow(e.target.value)    
            }}/>
            <input type="text" 
            name="range" 
            className="dictionary-form-add_text" 
            value={row.range} 
            onChange={(e) => { 
                setRow(e.target.value)    
            }}/>
            <button className="dictionary-form-add_button" onClick={handlerAddDictionary}>Add</button>
        </div>
    )
}

export default DictionariesForm
