import React, { useState } from "react"; 
import styles from "./SearchBar.module.css"
import {GiPerspectiveDiceSixFacesRandom} from "react-icons/gi"


export default function SearchBar(props) {

   const [id, setId] = useState("");

   function handleChange (event){
      setId(event.target.value);
   }

   const [idRandom, setIdRandom] = useState(1);

   function randomId () {
      let randomNumber = Math.floor(Math.random()*826);
      setIdRandom(randomNumber);
   }

   return (
      <div>
         <input 
         className={styles.GeneralInput} 
         value={id}
         type='search' 
         onChange={handleChange} 
         placeholder="Write a number..."/>
         <button 
         className={styles.GeneralButton} 
         onClick={()=>{props.onSearch(id); setId("");}}>Add Character</button>
         <button 
         className={styles.GeneralButton} 
         onClick={()=>{randomId(); props.onSearch(idRandom);}}>Random <GiPerspectiveDiceSixFacesRandom style={{marginTop: '-4px'}} size={20}/></button>
      </div>
   );
}
  