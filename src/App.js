import React, { Component } from 'react';
import {Route,Switch,withRouter,Redirect,BrowserRouter,Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import All from './containers/All';
import Completed from './containers/Completed';
import Incompleted from './containers/Incompleted'
class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">All</Link> 
          <Link to="/completed">Completed</Link>
          <Link to="/incompleted">Incompleted</Link>
        </div>
        <div>
        <Switch>
          <Route path="/completed" component={Completed} />
          <Route path="/incompleted" component={Incompleted} />
          <Route path="/" exact component={All} />
          <Redirect to="/" />
        </Switch>
        </div>
      </div>

    );
  }
}

export default App;
