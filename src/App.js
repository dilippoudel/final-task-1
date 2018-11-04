import React, { Component } from 'react';
import Customers from './components/customers';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import './App.css'
import Home from './components/home';
import Training from './components/training';




class App extends Component {
  render() {
    return (
      <BrowserRouter>
            <div>
            <Link to="/">Home</Link>{' '}
            <Link to="/components/customer">Customers</Link>{' '}
            <Link to="/components/training">Training</Link>{' '}


                <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/components/customer" component={Customers} />
                <Route path="/components/training" component={Training} />
                </Switch>
            </div>
            </BrowserRouter>
    );
  }
}

export default App;