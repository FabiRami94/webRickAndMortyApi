import React, { useEffect, useState } from "react";
import validation from "./validation";
import styles from './Form.module.css';

export default function Form ({login}){

    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErros] = useState({
        email: '',
        password: '', 
    })

    const [showSecondImage, setShowSecondImage] = useState(false);

    const handleChange = (event) => {
        setUserData({
            ...userData, 
            [event.target.name]: event.target.value
        });

        setErros(
            validation({
                ...userData,
                 [event.target.name]: event.target.value
            })
        )
    }

    let handleSubmit=(event)=>{
        event.preventDefault();
        login(userData);
    }

    useEffect(()=>{

        const timer = setTimeout(() => {
            setShowSecondImage(true);
        }, 1500);

        return () => clearTimeout(timer); //Para limpiar despues de pasar de página
    },[]);

    return (
        <form onSubmit={handleSubmit} >
            <div style={{backgroundImage: 'url(/imgs/fondo-login.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div>
                    <div style={{ position: 'relative' }}>
                        <img src="/imgs/portal-rick-and-morty.gif" alt="Animated GIF"  />
                            {showSecondImage && (
                             <div>  
                                <img 
                                src="/imgs/nombre.png" 
                                alt="Salida Portal" 
                                className={styles.TituloAnimado} />                           
                            <img 
                                src="/imgs/salida-portal.png" 
                                alt="Salida Portal" 
                                className={styles.Imagen2} />
                            </div>  
                            )}
                    </div>
                    <div className={styles.Espaceador1}>                     
                    </div> 
                    <div className={styles.Login}>
                        <div>  
                            <img 
                                src="/imgs/cabeza-rick.jpg" 
                                alt="Salida Portal" 
                                className={styles.CabezaRick} />                           
                            <div className={styles.Datos}>
                                <h4>Pss.. Pss.. The email is email@hotmail.com and the pssw StrongPass1... Don't tell anyone..</h4>
                            </div> 
                        </div>  
                        <div>
                            <label>Email:</label>
                            <input name="email" value={userData.email} onChange={handleChange} 
                                placeholder="email..." className={errors.email}></input>
                            <p>{errors.email}</p>
                        </div>
                        <div>
                            <label>Password:</label>
                            <input name="password" value={userData.password} onChange={handleChange} 
                                placeholder="password..." className={errors.password}></input>
                            <p>{errors.password}</p>
                        </div>
                        <div>
                            <button>Summit</button>
                        </div>                       
                    </div> 
                    <div className={styles.Espaceador2}>                     
                    </div>              
                </div>   
            </div>           
        </form>
    )
}