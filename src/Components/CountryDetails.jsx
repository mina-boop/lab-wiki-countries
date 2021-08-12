import React, {Component} from "react";
import countriesJSON from '../countries.json';
import {Link} from 'react-router-dom';

class CountryDetails extends Component {
    render() {
        return (
            <div>
                <h2>Details:</h2>
                {countriesJSON.map((eachcountry)=>{
return (

    <div key={eachcountry.id}>
    <h3>
              <Link to={`/country/${eachcountry.id}`}>{eachcountry.borders}</Link>
            </h3>
            <h4>{eachcountry.area}</h4>
</div>)} )}

</div>

);}}
                
           
      
    


export default CountryDetails;