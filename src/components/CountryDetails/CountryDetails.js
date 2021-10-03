import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import "./CountryDetails.css";

const CountryDetails = () => {
    const{id} = useParams();
    
    const[details,setDetails]=useState({});

    console.log(details);
    const {name,alpha3Code,flag,capital,population,timezones,nativeName} = details;

    useEffect(()=>{
        fetch(`https://restcountries.com/v2/name/${id}`)
        .then(res=> res.json())
        .then(data=>setDetails(data[0]));
    },[])

    return (
        <div className="details-container">
           <img src={flag} alt="flag"/>
            <h3>{name}</h3>
            <p>{nativeName}</p>
            <p>Capital : {capital}</p>
            <p>{alpha3Code}</p>
            <p>Population : {population}</p>
            <Link to="/countries">
              <button>Home</button>
            </Link>
        </div>
    );
};

export default CountryDetails;