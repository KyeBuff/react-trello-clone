import React, { Component } from 'react';
import './App.css';
import {
    Route,
    Switch,
} from "react-router-dom";
import Boards from './containers/Boards';
import NewBoard from './containers/NewBoard';
import Board from './containers/Board';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" component={Boards} />
          <Route path="/new" component={NewBoard} />
          <Route path="/boards/:id" render={ ({match}) => (
            <Board boardId={match.params.id} />
          )} />
        </Switch>
      </div>
    );
  }
}

export default App;
