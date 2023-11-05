import React, { useState } from "react"; 
import styles from "./SearchBar.module.css"
import {GiPerspectiveDiceSixFacesRandom} from "react-icons/gi"
import { useDispatch } from "react-redux";
import {searchById} from "../../redux/actions/actions.js";

export default function SearchBar() {

   const dispatch = useDispatch();
   const [id, setId] = useState("");
   const [idRandom, setIdRandom] = useState(Math.floor(Math.random()*826));

   function handleChange (event){
      setId(event.target.value);
   }

   function randomId () {
      let randomNumber = Math.floor(Math.random()*826);
      setIdRandom(randomNumber);
   }

   function onSearch(id) {
      try {
         dispatch(searchById(id))
      } catch (error) {
          window.alert({error: error.message});
      }
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
         onClick={()=>{onSearch(id); setId("");}}>Add Character</button>
         <button 
         className={styles.GeneralButton} 
         onClick={()=>{randomId(); onSearch(idRandom);}}>Random <GiPerspectiveDiceSixFacesRandom style={{marginBottom: '-6px'}} size={20}/></button>
      </div>
   );
}
  