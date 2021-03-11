import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Club from './Components/Club/Club';

function App() {
  return (
    <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/club/:id">
            <Club></Club>
          </Route>
          <Route path="*">
            <h1 className="text-center mt-5">404 Not Found !</h1>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
