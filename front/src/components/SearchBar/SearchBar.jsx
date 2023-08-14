import styles from './SearchBar.module.css';
import { useState } from 'react';

export default function SearchBar({onSearch}) {
   const [id, setId] = useState("")

   const handleChange = (e) => {
      setId(e.target.value)
   }

   const handleSearch = () => {
      onSearch(id);
      setId('')
   }
   return (
      <div className={styles.divSearchBar}>
       <input type='search' className={styles.input} onChange={handleChange} value = {id} placeholder='Agregar personaje...'></input>
       <button className={styles.cssButtonArrowBlack} onClick={handleSearch} type="button">
            <strong>Agregar</strong>
         </button>
      </div>
   );
}
