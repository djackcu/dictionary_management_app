import React from 'react';
import {Switch, Route, Link} from "react-router-dom";
import DictionariesList from '../dictionariesList/dictionariesList';
import DictionaryList from '../dictionaryList/dictionaryList';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        Dictionary Management
      </header>
      <nav>
          <Link to="/">Home</Link>
        </nav>
      <div className="app-body">
      <Switch>
        <Route exact path="/" component={DictionariesList} />
        <Route path="/:name" component={DictionaryList} />
      </Switch>
      </div>
        
    </div>
  );
}

export default App;
