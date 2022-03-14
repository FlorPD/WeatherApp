import React from 'react';
import Logo from '../img/weatherLogo.png'
import SearchBar from './SearchBar.jsx';
import  styles from './styles/Nav.module.css';
import {NavLink} from 'react-router-dom'


function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-light" style={{backgroundColor: " #faf7f6 "}}>
        <div className={styles.container} >
      <NavLink to = {'/'}>
          <img src={Logo} className={styles.logo} alt="" />
        </NavLink>
           <h4 className={styles.title}> Weather App </h4>
        </div>
        <div className = {styles.buttons}>
        <NavLink to ={'/'} className={styles.link}> Home </NavLink>
        <NavLink to ={'/about'} className={styles.link}> About </NavLink>
        <SearchBar
          onSearch={onSearch}
        />
        </div>
    </nav>
  );
};

export default Nav;
