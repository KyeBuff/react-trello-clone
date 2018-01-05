import React, { Component } from 'react';
import './App.css';
import {
    Route,
    Switch,
    Link,
} from "react-router-dom";
import Boards from './containers/Boards';
import Board from './containers/Board';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          <h1>Trello clone</h1>
          <Link className="btn-home" to="/"></Link>
        </header> 
        <Switch>
          <Route exact path="/" component={Boards} />
          <Route path="/boards/:id" render={ ({match}) => (
            <Board boardId={match.params.id} />
          )} />
        </Switch>
      </div>
    );
  }
}

export default App;
