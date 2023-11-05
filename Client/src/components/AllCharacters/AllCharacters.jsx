
import React from "react";
import axios from 'axios';
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from './AllCharacters.module.css';

const AllCharacters = () => {

    const [characters, setCharacters] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        
        const fetchCharacters = async () => {

            const allCharacters = [];

            for (let id = 1; id <= 826; id++) {
                try {
                    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
                    allCharacters.push(response.data);
                } catch (error) {
                    console.error(`Error fetching character with ID ${id}:`, error);
                }
            }

            setCharacters(allCharacters);
            
            setLoading(false);
        };
        fetchCharacters();
    }, []);

    return(
        <div style={{
            backgroundImage: 'url(/imgs/fondo-detail.jpg)', 
            backgroundSize: 'cover', 
            height: '59650px',
            backgroundPosition: 'center' ,
            backgroundAttachment: 'fixed',
            paddingTop: '1px' 
            }}>  
            <div>
                {!loading && (
                    <table className={styles.tableStyle}>
                        <thead>
                            <tr>
                                <th className={styles.customTableTitles}><h2>ID</h2></th>
                                <th className={styles.customTableTitles}><h2>NAME</h2></th>
                                <th className={styles.customTableTitles}><h2>STATUS</h2></th>
                                <th className={styles.customTableTitles}><h2>SPECIES</h2></th>
                                <th className={styles.customTableTitles}><h2>GENDER</h2></th>
                                <th className={styles.customTableTitles}><h2>ORIGIN</h2></th>
                                <th className={styles.customTableTitles}><h2>IMAGE</h2></th>
                                <th className={styles.customTableTitles}><h2>DETAILS</h2></th>
                            </tr>
                        </thead>
                        <tbody>
                            {characters.map((character) => 
                            <tr key={character.id}>
                                <th className={styles.customTableId}><h3>{character.id}</h3></th>
                                <th className={styles.customTable}><h3>{character.name}</h3></th>
                                <th className={styles.customTable}><h3>{character.status}</h3></th>
                                <th className={styles.customTable}><h3>{character.species}</h3></th>
                                <th className={styles.customTable}><h3>{character.gender}</h3></th>
                                <th className={styles.customTable}><h3>{character.origin.name}</h3></th>
                                <th className={styles.customTable}><img className={styles.ImagenPersonaje} src={character.image} alt="images"></img></th>
                                <th className={styles.customTable}>
                                    <NavLink to={`/detail/${character.id}`}>
                                        <button className={styles.GeneralButton}>Details</button>
                                    </NavLink>     
                                </th>
                            </tr>           
                            )}
                        </tbody>
                    </table>
                )}      
                {loading && <div style={{ position: 'relative' }}>
                        <img style={{marginTop: '25px'}} src="/imgs/portal-rick-and-morty.gif" alt="Animated GIF"  />      
                        <div>  
                            <h1 className={styles.Loading}> Loading...</h1>                     
                        </div>  
                </div>}
            </div>                 
        </div>
    )
};

export default AllCharacters;