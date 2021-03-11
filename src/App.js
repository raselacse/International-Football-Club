import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Club from './Components/Club/Club';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/club/:id">
            <Club/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
