import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries,setCountries] = useState([]);
    const [searchText, setSearchText] = useState("a");

    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/name/${searchText}`)
        .then(res=> res.json())
        .then(data=>setCountries(data));
    },[searchText])

    console.log(countries);

    const handleSearch =(event)=>{
        setSearchText(event.target.value);
    }
    return (
        <div>
            <div className="search-field">
                <input onChange={handleSearch} type="text" placeholder="Search Your Country"/>
                <div>
                  <button>Search</button>
                </div>
            </div>
            <div className="countries-container">
                {
                    countries?.map(country => <Country country={country}></Country>)
                } 
                
            </div>
        </div>

    );
};

export default Countries;