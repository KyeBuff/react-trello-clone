import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import Home from './components/Home';
import NewBoard from './components/NewBoard';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/new" component={NewBoard} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
