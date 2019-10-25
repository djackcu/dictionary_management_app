import React,{useState, useEffect} from 'react';
import * as dictionaryApi from '../../api/dictionaryApi'
import './App.css';

function App() {

  const [dictionaries, setDictionaries] = useState([]);

  useEffect(() => {
    dictionaryApi.initialStore();
    dictionaryApi.setDictionary('color');
    const dictionariesValues =  dictionaryApi.getDictionaries();
    setDictionaries([...dictionariesValues]);
    return () => {
      localStorage.clear();
    };
  },[]);
  

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {dictionaries.map((dict) => (
            <div key={dict}>{dict}</div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
