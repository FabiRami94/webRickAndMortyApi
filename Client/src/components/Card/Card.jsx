import React from "react";
import {NavLink} from "react-router-dom";
import {addFav, removeFav} from "../../redux/actions";
import {connect} from 'react-redux'
import { useState, useEffect } from "react";
import styles from "./Card.module.css"


function Card({myFavorites, id, onClose, name, status, species, gender, origin, image, addFav, removeFav}) {

   const [isFav, setIsFav] = useState(false);
   
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavourites = () => {
      if(isFav){
         setIsFav(false)
         removeFav(id)
      } else {
         setIsFav(true)
         addFav({myFavorites, id, onClose, name, status, species, gender, origin, image})
      }
   }

   return (
      <div className={styles.Tarjeta}>
         <div style={{display:'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
            <div style={{display:'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
               {
                  isFav ? 
                  <button className={styles.GeneralButton} onClick={handleFavourites}>❤️</button> :
                  <button className={styles.GeneralButton} onClick={handleFavourites}>🤍</button>
               } 
               <h4 >N°: {id}</h4>
               {
                  onClose ? <button className={styles.GeneralButton} onClick={() => onClose(id)}>X</button> : null
               }  
            </div>
            <div style={{display:'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
               <h3 style={{marginTop: '10px'}}>Nombre: {name} </h3>
               <NavLink to={`/detail/${id}`}>
                  <button style={{marginTop: '0px'}} className={styles.GeneralButton}>Details</button>
               </NavLink>
               <div style={{display: 'flex', justifyContent: 'center'}}>            
                  <img className={styles.ImagenPersonaje} src={image} alt='Imagen personaje' />
               </div>           
            </div>
         </div>
      </div>
   );
}

function mapStateToProps (state){
   return{
      myFavorites : state.myFavorites
   }
}

function mapDispatchToProps(dispatch){
   return{
      addFav: function (character){
         dispatch(addFav(character))
      },
      removeFav: function(id){
         dispatch(removeFav(id))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
