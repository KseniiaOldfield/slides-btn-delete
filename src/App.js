import { useState } from 'react';
import { data } from './data';
import './App.css';
import Giftsbox from './Giftsbox';


function App() {
  const [countries, setCountries] = useState(0);
  const {id, country, image} = data[countries];
  const backCountry = () => {
    setCountries((countries => {
    countries --;
    if (countries < 0) {
      return data.length -1;
    }
        return countries;
    }))
  }
    const nextCountry = () => {
      setCountries((countries => {
        countries ++;
        if (countries > data.length -1){
          countries = 0;
        }
        return countries;
      }))
    } 
  return (
    <div>
      <div className="container">
        <h1>MY GOALS FOR THIS YEAR</h1>
      </div>
      <div className="container">
          <h2>{id}. {country}</h2>
        </div>
      <div className='box'>
        <div className='btn'>
          <button onClick={backCountry}> Back </button>
        </div>
        <div className="container1">
          <img className='photo' src={image} width="500px" alt='country'/>
        </div>
        <div className='btn'>
          <button onClick={nextCountry}> Next </button>
        </div>
      </div>
      <div className = 'flex'>
      < Giftsbox />
      </div>
    </div>);
}

export default App;
