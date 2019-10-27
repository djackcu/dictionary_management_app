import React from 'react';
import DictionaryList from '../dictionaryList/dictionaryList';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        Dictionary Management
      </header>
      <div className="app-body">
      <DictionaryList />
      </div>
        
    </div>
  );
}

export default App;
