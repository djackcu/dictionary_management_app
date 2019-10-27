import React,{useState} from 'react'

function DictionaryForm({addDictionary}) {
    const [dictionary, setDictionary] = useState('');
    const handlerAddDictionary = () => {
        addDictionary(dictionary);
        setDictionary('');
    };
    return (
        <div className="dictionary-form">
            <input type="text" 
            name="dictionary" 
            className="dictionary-form-add_text" 
            value={dictionary} 
            onChange={(e) => { 
                setDictionary(e.target.value)    
            }}/>
            <button className="dictionary-form-add_button" onClick={handlerAddDictionary}>Add</button>
        </div>
    )
}

export default DictionaryForm
