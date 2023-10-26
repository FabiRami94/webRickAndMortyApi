import React, { useState } from "react"; 
import styles from "./SearchBar.module.css"

export default function SearchBar(props) {

   const [id, setId] = useState("");

   function handleChange (event){
      setId(event.target.value);
   }

   return (
      <div>
         <input 
         className={styles.GeneralInput} 
         type='search' 
         onChange={handleChange} 
         placeholder="Choose a number..."/>
         <button 
         className={styles.GeneralButton} 
         onClick={()=>{props.onSearch(id); setId("");}}>Add</button>
      </div>
   );
}
  