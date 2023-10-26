import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Detail.module.css"

export default function Detail (){

    const [character, setCharacter] = useState({});

    const {id} = useParams();
    const navigate = useNavigate();

    const back = () => {
        navigate(-1);   
    }

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

     console.log(character.id)

    return(
        <div style={{backgroundImage: 'url(/imgs/fondo-favorites.png)', backgroundSize: 'cover', backgroundPosition: 'center' , height: '750px'}}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                <div className={styles.Info}>
                    <button className={styles.GeneralButton} onClick={back}>&#8592; BACK</button>
                    <h1>NAME: {character.name}</h1>
                    <h2>STATUS: {character.status}</h2>
                    <h2>SPECIES: {character.species}</h2>
                    <h2>TYPE: {(character.type === "") ? 'Not Idea...' : character.type}</h2>
                    <h2>GENDER: {character.gender}</h2>
                    <h2>ORIGIN:{character.origin && character.origin.name}</h2>
                    <h2>LOCATION: {character.location && character.location.name}</h2>
                </div>
                <div>  
                    <img 
                        src="/imgs/portal-rick-and-morty.gif" 
                        alt="Animated GIF" 
                        className={styles.Portal} />                           
                    <img 
                        src="/imgs/rick-bailando.gif" 
                        alt="Salida Portal" 
                        className={styles.RickBailando} /> 
                </div> 
                <div>
                    <h1 className={styles.Id} >ID: {character.id}</h1>
                    <img className={styles.ImagenPersonaje} src={character.image} alt="Character Image"/>
                </div>
            </div>
        </div>
    )
}
