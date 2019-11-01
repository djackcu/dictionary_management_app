import React,{useState} from 'react'

function DictionariesForm({addDictionary}) {
    const [dictionary, setDictionary] = useState({name:'',description:''});
    const handlerAddDictionary = () => {
        addDictionary(dictionary);
        setDictionary({name:'',description:''});
    };
    return (
        <div className="dictionary-form">
            <input type="text" 
            name="name" 
            className="dictionary-form-add_text" 
            value={dictionary.name} 
            onChange={(e) => { 
                setDictionary({...dictionary, name:e.target.value})    
            }}/>
            <input type="text" 
            name="description" 
            className="dictionary-form-add_text" 
            value={dictionary.description} 
            onChange={(e) => { 
                setDictionary({...dictionary,description:e.target.value})    
            }}/>
            <button className="dictionary-form-add_button" onClick={handlerAddDictionary}>Add</button>
        </div>
    )
}

export default DictionariesForm
