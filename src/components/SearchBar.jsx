import React, { useState } from "react";
import styles from "./styles/SearchBar.module.css"
import {FaSearch} from 'react-icons/fa'
export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form className={styles.search} onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("")
    }}>
      <input
       className={styles.search_input}
        type="text"
        placeholder="City..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <button type="submit" className={styles.button}><FaSearch size ={20}/> </button>
    </form>
  );
}
