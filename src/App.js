import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Countries from './components/Countries/Countries';
import Clickevent from './components/Clickevent/Clickevent';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Clickevent></Clickevent>
      <Countries></Countries>
      
    </div>
  );
}

function LoadCountries(){
  const [countries, setCountries] = useState([]);

  useEffect( () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data => setCountries(data))
  },[]);
  return (
    <div>
      <h1>Visisting Countries</h1>
      <h3>Available countries: {countries.length}</h3>

      {
        countries.map(country => <Country name={country.name.common} population = {country.population}></Country>)
      }
    </div>
  );
}

function Country(popos) {
  console.log(popos);
  return (
    <div>
      <h2>Name: {popos.name}</h2>
      <h4>Population: {popos.population}</h4>
    </div>
  )
}

export default App;
