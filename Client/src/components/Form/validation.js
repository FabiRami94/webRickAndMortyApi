// import { useFetcher } from "react-router-dom";

const validation = (useData)=>{

    const errors = {};

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const regexpassword =  /^(?=\w*\d)\S{6,12}$/;


    if(!useData.email){
        errors.email = 'No puede ser vacio'
    }
    if(!regexEmail.test(useData.email)){
        errors.email = 'Debe ser correo electronico'
    }
    if(useData.email.length > 35){
        errors.email = 'Debe tener menos de 35 caracteres'
    }
    if(!regexpassword.test(useData.password)){
        errors.password = "Debe incluir un número y tener entre 6 - 10 caracteres"
    }

    return errors;
}

export default validation;