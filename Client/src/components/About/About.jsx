
import React from "react";
import styles from "./About.module.css";

export default function About (){

    return (
        <div style={{
            backgroundImage: 'url(https://wallpapercave.com/wp/wp8685042.jpg)',
            backgroundSize: 'cover',
            minHeight: '100vh',
            backgroundPosition: 'center' ,
            backgroundAttachment: 'fixed', 
          
            }}>
            <img 
                src="https://media.tenor.com/BgR83Df82t0AAAAi/portal-rick-and-morty.gif" 
                alt="Animated Gif Waiting"
                className={styles.portal}/>
            <img 
                src="https://i.ibb.co/NpfbPST/Foto-sin-fondo-persona-Rick-and-Morty.png" 
                alt="Me"
                className={styles.me}/>
            <div className={styles.letters}>
                <div>
                    <span >
                        Soy Fabián Ramírez, Arquitecto de profesión y graduado como Full Stack Developer en SoyHenry.
                    </span>
                </div>
                <br />
                <div>
                    <span >
                    Este proyecto se creó como parte de mi proceso de aprendizaje en SoyHenry. 
                    Se ha realizado una optimización en varios aspectos internos del código, 
                    y se seguirá trabajando en mejoras continuas en el futuro. Espero que la página 
                    web y su interfaz hayan sido de tu agrado y te resulten útiles.
                    </span>
                </div>
            </div>
        </div>
    )
}