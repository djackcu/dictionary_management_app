import React from 'react';
import DictionariesList from '../dictionariesList/dictionariesList';
import DictionaryList from '../dictionaryList/dictionaryList';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        Dictionary Management
      </header>
      <div className="app-body">
      <DictionariesList />
      <DictionaryList />
      </div>
        
    </div>
  );
}

export default App;
