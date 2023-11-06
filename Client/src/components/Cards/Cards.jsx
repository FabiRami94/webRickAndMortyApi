import React from "react";
import Card from "../Card/Card"
import styles from "./Cards.module.css"
import { useSelector } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";

export default function Cards() {

   const charactersById = useSelector(state => state.characters);
   
   return (
      <div style={{
         backgroundImage: 'url(https://www.pixelstalk.net/wp-content/uploads/images6/HD-Wallpaper-4K-Rick-And-Morty-Free-Download.png)',
         backgroundSize: 'cover',
         minHeight: '100vh',
         backgroundPosition: 'center' ,
         backgroundAttachment: 'fixed', 
         }}>
         <SearchBar></SearchBar>
         <div className={styles.Tarjetas}>
            {
               charactersById?.map((character) => 
               <Card 
                  key = {character.id}
                  id = {character.id}
                  name = {character.name}
                  status = {character.status}
                  species = {character.species}
                  gender = {character.gender}
                  origin = {true}
                  image = {character.image}
                  showX = {true}
               />
               )
            }  
         </div>
      </div>
   )
}



