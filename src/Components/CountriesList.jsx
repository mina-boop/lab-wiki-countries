import React, { Component } from 'react';
import countriesJSON from '../countries.json';
import {Link} from 'react-router-dom';

class CountriesList extends Component {
  render() {
    return (
      <div>
        {countriesJSON.map((country) => {
          return (
            <div>
              <div
                class="col-5"
                style={{ maxheight: '50%', overflow: 'scroll' }}
              >
                <div class="list-group">
                  <Link
                    exact
                    to="/"
                    class="list-group-item list-group-item-action"
                    href={country.cca3}
                  >
                    {country.name.common}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CountriesList;
