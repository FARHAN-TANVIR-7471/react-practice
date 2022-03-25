import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[]);

    return (
        <div>
            <h1>Hello I am from countries table</h1>
            <h2>Total Countries: {countries.length}</h2>
            {
                countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
                // countries.map(country => console.log(country))
            }
        </div>
    );
};


export default Countries;