import React, { useEffect, useState } from "react";
import validation from "./validation";
import styles from './Form.module.css';

export default function Form ({login}){

    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErros] = useState({
        email: 'campo obligatorio*',
        password: 'campo obligatorio*', 
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

    const buttonDisable = () => {
        let isDisable;
        for(let error in errors){
            if(errors[error] === ""){
                isDisable = false
            } else {isDisable = true; 
                break};
        } 
        return isDisable;
    }

    return (
        <div className={styles.divGeneral}>
            <div>
                <div style={{ position: 'relative' }}>
                    <img src="https://media.tenor.com/BgR83Df82t0AAAAi/portal-rick-and-morty.gif" 
                        alt="Animated GIF"  />
                        {showSecondImage && (
                            <div>  
                            <img 
                                src="https://i.ibb.co/Y3j4fhZ/nombre.png" 
                                alt="Salida Portal" 
                                className={styles.TituloAnimado} />                           
                            <img 
                                src="https://i.ibb.co/hBcdxkr/salida-portal.png" 
                                alt="Salida Portal" 
                                className={styles.Imagen2} />
                            </div>  
                        )}
                    </div>   
                <form onSubmit={handleSubmit} >
                    <div className={styles.Login}>
                        <div>  
                            <img 
                                src="https://i.ibb.co/khRN911/cabeza-rick.jpg" 
                                alt="Salida Portal" 
                                className={styles.CabezaRick} />                           
                            <div className={styles.Datos}>
                                <h4>Pss.. Pss.. The email is email@hotmail.com and the pssw StrongPass1... Don't tell anyone..</h4>
                            </div> 
                        </div>  
                        <div>
                            <label>Email:</label>
                            <input 
                                name="email" 
                                value={userData.email} 
                                onChange={handleChange} 
                                placeholder="email..." 
                                className={styles.GeneralInput}></input>
                            <p className={styles.errorsMessage}>{errors.email}</p>
                        </div>
                        <div>
                            <label>Password:</label>
                            <input 
                                name="password" 
                                value={userData.password} 
                                onChange={handleChange} 
                                placeholder="password..." 
                                className={styles.GeneralInput}></input>
                            <p className={styles.errorsMessage}>{errors.password}</p>
                        </div>
                        <div>
                            <button disabled={buttonDisable()} className={styles.GeneralButton}>Summit</button>
                        </div>                       
                    </div> 
                    </form>            
                </div>   
        </div>           
    )
}