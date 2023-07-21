import styles from './SearchBar.module.css';
import { useState } from 'react';

export default function SearchBar({onSearch}) {
   const [id, setId] = useState("")

   const handleChange = (e) => {
      let { value } = e.target
      // let value = e.target.value
      setId(value)
   }
   return (
      <div className={styles.divSearchBar}>
       <input type='search' className={styles.input} onChange={handleChange} value = {id} placeholder='Agregar personaje...'></input>
       <button className={styles.cssButtonArrowBlack} onClick={()=>onSearch(id<826?id:826)} type="button">
            <strong>Agregar</strong>
         </button>
      </div>
   );
}
