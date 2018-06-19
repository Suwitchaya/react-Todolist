import React, { Component } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import './App.css';
import All from './containers/All';
import Completed from './containers/Completed';
import Incompleted from './containers/Incompleted'
import Layout from './hoc/Layout'
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/completed" component={Completed} />
            <Route path="/incompleted" component={Incompleted} />
            <Route path="/" exact component={All} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
