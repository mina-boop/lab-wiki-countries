import React, {Component} from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import CountryDetails from './Components/CountryDetails';
import CountriesList from "./Components/CountriesList";
import { Switch, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Link exact to ="/"> List of countries </Link>
    <CountriesList/>
    
    <Switch>
    <Route exact path="/" component={Navbar}/>
          <Route exact path='/countriesdetails' component={CountriesList}/>
          <Route path='/countrieslist' component={CountryDetails}/>
         
        </Switch>
    </div>
  );
}

export default App;
