
import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import styles from "./Nav.module.css"

export default function Nav (){

    const [activeButton, setActiveButton] = useState('button1');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

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
                    <NavLink to={"/home"} onClick={() => handleButtonClick("button1")}>
                        <button className={(
                            activeButton === "button1" ? 
                            styles.GeneralButtonActive : 
                            styles.GeneralButton)}>
                            Home
                        </button>
                    </NavLink>
                    <NavLink to={"/favorites"} onClick={() => handleButtonClick("button2")}>
                        <button className={(
                            activeButton === "button2" ? 
                            styles.GeneralButtonActive : 
                            styles.GeneralButton)}>
                            Favorites
                        </button>
                    </NavLink>
                    <NavLink to={"/allcharacters"} onClick={() => handleButtonClick("button3")}>
                        <button className={(
                            activeButton === "button3" ? 
                            styles.GeneralButtonActive : 
                            styles.GeneralButton)}>
                            AllCharacters
                        </button>
                    </NavLink>
                    <NavLink to={"/about"} onClick={() => handleButtonClick("button4")}>
                        <button className={(
                            activeButton === "button4" ? 
                            styles.GeneralButtonActive : 
                            styles.GeneralButton)}>
                            About
                        </button>
                    </NavLink>
                    <button className={styles.GeneralButton2}>
                        LogOut</button>
                </div>
            </div>
            <hr style={{ width: '100%', margin: 0 }} /> {/* Estilo para ocupar todo el ancho */}
        </div>
    )
}




