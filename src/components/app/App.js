import React from 'react';
import {Switch, Route, Link, useLocation} from "react-router-dom";
import DictionariesList from '../dictionariesList/dictionariesList';
import DictionaryList from '../dictionaryList/dictionaryList';
import './App.css';

function App() {
  const loc =  useLocation()
  return (
    <div className="app">
      <header className="app-header">
        Dictionary Management
      </header>
      <nav>
          <Link to="/">Home </Link>
          <div> {loc.pathname}</div>
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
