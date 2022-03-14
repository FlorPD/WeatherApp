import React, { useState } from 'react';

import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About';
import City from '../components/City';
import {Route} from 'react-router-dom'
import Swal from 'sweetalert2'

const apiKey = '1fdf1a3d1a671a037aea0d8209f7a79b';

function App() {
  const [cities, setCities] = useState([]);
  console.log(cities)
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min -273,15),
            max: Math.round(recurso.main.temp_max -273,15),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: Math.round(recurso.main.temp -273,15),
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          const exist = cities?.filter((el) => el.id === ciudad.id)
          if(exist.length>0){
            Swal.fire({
              icon: 'error',
              title: `${ciudad.name } is already on screen`,
              text: `Try another city!`,
              confirmButtonColor: "#5ea4df"    
            })
          }else{
            setCities(oldCities => [...oldCities, ciudad]);

          }
        }
         else {
          // alert("Ciudad no encontrada");
          Swal.fire({
            icon: 'error',
            title: `${ciudad } not found`,
            text: `Try another city!`,
            confirmButtonColor: "#5ea4df"
            
          })
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId)); // la info del ciudadId la recibe como string por eso lo tengo que pasar a num
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  return (
    <div className="App">
       <Route path = {'/'} render= { () => <Nav onSearch={onSearch}/>} />
      <Route path = {'/city/:ciudadId'} render = {({match}) => <City city={onFilter(match.params.ciudadId)}/>}/>
      <Route exact path ={'/about'} render = {() => <About/>} />
      
      <div>
        <Route exact path ={'/'} render = { () => <Cards cities={cities} onClose={onClose} />} />
      </div>
     
      
      
    </div>
  );
}

export default App;
