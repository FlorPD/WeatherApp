import React from 'react';
import styles from './styles/Card.module.css';
import { Link } from 'react-router-dom';
import {TiDeleteOutline} from 'react-icons/ti'

export default function Card({min, max, name, img, onClose, id}) {

  return ( 
  <div className ={styles.card}>
     <button className = {styles.delete_btn} onClick = {onClose}><TiDeleteOutline size = {30}/></button> 
     <Link to ={`/city/${id}`} className = {styles.city}>
     <div >
         <h4 className={styles.name}>{name}</h4>
         <img src = {`https://openweathermap.org/img/wn/${img}@2x.png`} alt = "img not found"></img>
     </div>
    </Link>
     <div className = {styles.temp}>
        <div>
           <p>Low</p>
           <p className = {styles.value}>{min} ºC</p>
        </div>
    <div>
          <p>High</p>
          <p className = {styles.value}>{max} ºC</p>
    </div>
    
    </div> 
</div>
  )
};