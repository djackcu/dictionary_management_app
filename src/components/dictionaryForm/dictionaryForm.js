import React,{useState} from 'react'

function DictionaryForm() {
    const [dictionary, setDictionary] = useState('');
    return (
        <div className="dictionary-form">
            <input type="text" 
            name="dictionary" 
            className="dictionary-form-add_text" 
            value={dictionary} 
            onChange={(e) => { 
                setDictionary(e.target.value)    
            }}/>
            <button className="dictionary-form-add_button">Add</button>
        </div>
    )
}

export default DictionaryForm
