import React from 'react'
import styles from "./styles/City.module.css"
import Swal from 'sweetalert2'
import{useHistory} from "react-router-dom"

function City({city}) {
    const history = useHistory()
    if(!city){
        Swal.fire({
            icon: 'error',
            title: `Oops something went wrong!`,
            text: `Please try again`,
            confirmButtonColor: "#5ea4df",
        })
        history.push("/")
        return(
            <div>PLEASE TRY AGAIN</div>
        )
    }
    function handleClick(e){
        e.preventDefault()
        history.push("/")
    }
    return (
        
        <div className={styles.details}>
        <div className={styles.container}>
            <h2>{city.name}</h2>
            <div className={styles.info}>
                <p>Temperature:<span className={styles.space}>{city.temp} ºC</span></p>
                <p>Weather:<span className={styles.space}> {city.weather}</span></p>
                <p>Wind speed:<span className={styles.space}> {city.wind} km/h</span></p>
                <p>Clouds:<span className={styles.space}> {city.clouds}</span></p>
                <p>Latitude:<span className={styles.space}>{city.latitud}º</span></p>
                <p>Longitude:<span className={styles.space}> {city.longitud}º</span></p>
            </div>
    </div>
    <button className={styles.button} onClick = {e => handleClick(e)}>Back</button>
    
</div>
    )
}

export default City
