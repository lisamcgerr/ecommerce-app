import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login'
import Signup from './Signup';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/login">
            <Header />
            <Login />
          </Route>
          <Route exact path="/signup">
            <Header />
            <Signup />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
