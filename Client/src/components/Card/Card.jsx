
import React from "react";
import {NavLink} from "react-router-dom";
import {addFav, removeFav} from "../../redux/actions/actions";
import {connect, useDispatch} from 'react-redux'
import { useState, useEffect } from "react";
import styles from "./Card.module.css"
import useSound from "use-sound";
import woVuDud from "../../assets/woo_vu_luvub_dub_dub.mp3";
import shit from "../../assets/oh-shit-mother____er.mp3";
import {deleteById} from "../../redux/actions/actions.js";


function Card({myFavorites, id, name, status, species, gender, origin, image, addFav, removeFav, showX}) {

   const dispatch = useDispatch();
   const [isFav, setIsFav] = useState(false);
   const [sonido1] = useSound(woVuDud);
   const [sonido2] = useSound(shit);
   
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);

   const handleFavourites = () => {
      if(isFav){
         setIsFav(false)
         removeFav(id)
         sonido2()
      } else {
         setIsFav(true)
         addFav({myFavorites, id, name, status, species, gender, origin, image})
         if(name.includes('Morty') || name.includes('Rick')){sonido1()};     
      }
   }

   function onClose (id) {
      dispatch(deleteById(id))
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
                  showX ? <button className={styles.GeneralButton} onClick={() => onClose(id)}>X</button> : null
               }  
            </div>
            <div style={{display:'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
               <h3 style={{marginTop: '10px'}}>Nombre: {name} </h3>
               <NavLink to={`/detail/${id}`}>
                  <button style={{marginTop: '0px'}} className={styles.GeneralButton}>Details</button>
               </NavLink>
               <div style={{display: 'flex', justifyContent: 'center'}}>            
                  <img className={name.length < 30 ? styles.ImagenPersonaje : styles.ImagenPersonaje2} src={image} alt='Imagen personaje' />
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
