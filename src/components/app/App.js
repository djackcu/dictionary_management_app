import React from 'react';
import useApp from './useApp';
import DictionaryList from '../dictionaryList/dictionaryList';
import './App.css';

function App() {
  const{dictionaries} = useApp(['color']);
  return (
    <div className="app">
      <header className="app-header">
        Dictionary Management
      </header>
      <div className="app-body">
      <DictionaryList dictionaries={dictionaries} />
      </div>
        
    </div>
  );
}

export default App;
