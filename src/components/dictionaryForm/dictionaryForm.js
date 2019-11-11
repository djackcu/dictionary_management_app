import React,{useState} from 'react'

function DictionariesForm({addRow}) {
    const [row, setRow] = useState({domain:'',range:''});
    const handlerAddDictionary = () => {
        addRow(row);
        setRow({domain:'',range:''});
    };
    return (
        <div className="dictionary-form">
            <label >Domain:
            <input type="text" 
            name="domain" 
            className="dictionary-form-add_text" 
            value={row.domain} 
            onChange={(e) => { 
                setRow({...row,domain:e.target.value})    
            }}/>
            </label>
            <label>Range:
            <input type="text" 
            name="range" 
            className="dictionary-form-add_text" 
            value={row.range} 
            onChange={(e) => { 
                setRow({...row,range:e.target.value})    
            }}/>
            </label>
            <button className="dictionary-form-add_button" onClick={handlerAddDictionary}>Add</button>
        </div>
    )
}

export default DictionariesForm
