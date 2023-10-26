import React from "react"
import SearchBar from "../SearchBar/SearchBar"
import { NavLink } from "react-router-dom"
import styles from "./Nav.module.css"

export default function Nav (props){

    return(
        <div style={{backgroundColor: 'rgb(0, 0, 0, 0.8)'}}>
            <div style={{display: 'flex',
                flexDirection: 'Row',
                justifyContent: 'space-evenly',
                alignItems: 'center', 
                }}> 
                <img 
                    src="/imgs/nombre.png" 
                    alt="Salida Portal" 
                    className={styles.TituloAnimado} /> 
                <div>
                    <div className={styles.Espaceador1}></div> 
                    <SearchBar onSearch={props.onSearch} />
                    <NavLink to={"/home"} className={
                        ({isActive}) => (
                            isActive 
                            ? styles.GeneralButtonActive 
                            : null)}><button className={styles.GeneralButton}>
                                Home</button></NavLink>
                    <NavLink to={"/favorites"} className={
                        ({isActive}) => (
                            isActive 
                            ? styles.GeneralButtonActive 
                            : null)}><button className={styles.GeneralButton}>
                                Favorites</button></NavLink>
                    <NavLink to={"/about"} className={
                        ({isActive}) => (
                            isActive 
                            ? styles.GeneralButtonActive 
                            : null)}><button className={styles.GeneralButton}>
                                About</button></NavLink>
                    <div className={styles.Espaceador1}></div>
                </div>
                <img 
                    src="/imgs/nombre.png" 
                    alt="Salida Portal" 
                    className={styles.TituloAnimado} /> 
                </div>
                <hr style={{ width: '100%', margin: 0 }} /> {/* Estilo para ocupar todo el ancho */}
        </div>
    )
}




