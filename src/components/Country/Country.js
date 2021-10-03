import React from 'react';
import { Link } from 'react-router-dom';
import "./Country.css";

const Country = (props) => {
    const{name,flags} = props.country;
    return (
        <div className="country-container">
            {/* <img src={flags.png} alt="flag"/>
            <h3>{props.country.name}</h3> */}
            <Link to={`/country/${name}`}>
              <button>See Details</button>
            </Link>
            
        </div>
    );
};

export default Country;