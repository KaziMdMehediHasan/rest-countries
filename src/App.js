import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Countries from './components/Countries/Countries';
import CountryDetails from './components/CountryDetails/CountryDetails';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Countries></Countries>
        </Route>
        <Route path="/countries">
          <Countries></Countries>
        </Route>
        <Route path="/country/:id">
          <CountryDetails></CountryDetails>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
