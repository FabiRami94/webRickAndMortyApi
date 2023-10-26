import React from "react";
import Card from "../Card/Card"
import styles from "./Cards.module.css"

export default function Cards({characters, onClose}) {
   
   return (
      <div style={{
         backgroundImage: 'url(/imgs/fondo-cards.png)', 
         backgroundSize: 'cover', 
         height: '1200px',
         backgroundPosition: 'center' ,
         backgroundAttachment: 'fixed', 
         }}>
         <div className={styles.Tarjetas}> 
            {
               characters.map((character) => 
               <Card 
                  key = {character.id}
                  id = {character.id}
                  name = {character.name}
                  status = {character.status}
                  species = {character.species}
                  gender = {character.gender}
                  origin = {true}
                  image = {character.image}
                  onClose = {onClose}
               />
               )
            }  
         </div>
      </div>
   )
}



