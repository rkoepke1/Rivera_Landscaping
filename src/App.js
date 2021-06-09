import './App.css';
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Quote from './pages/quote'
import Home from './pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} exact />
        <Route path="/quote" component={Quote} />
      </Switch>
    </Router>
  );
}

export default App;
