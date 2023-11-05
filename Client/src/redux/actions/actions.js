
import { SEARCH_BY_ID, DELETE_BY_ID, ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actionsTypes";
import axios from "axios";

// Actions creators

export const searchById = (id) => {

    return async function (dispatch){
        
        try {
            const parsedId = parseInt(id); 

            if (isNaN(parsedId)) {
               window.alert('¡Debe ser un número!');
            } else if (id > 826) {
               window.alert('¡No hay personajes con este ID!');
            } else {
                const character = (await axios.get(`http://localhost:3001/api/character/${id}`)).data
                
                dispatch({type: SEARCH_BY_ID, payload: { character, parsedId }})
               }        
        } catch (error) {        
            window.alert('¡Ocurrió un error al buscar el personaje!' + error.message);
        }       
    }
}
 
export const deleteById = (id) => {

    return async function (dispatch){
        dispatch({type: DELETE_BY_ID, payload: id})
    }
}

export const addFav = (character) => {
    return {
        type: ADD_FAV,
        payload: character}
}

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV, 
        payload: id}
}

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender}
}

export const orderCards = (orden) => {
    return {
        type: ORDER,
        payload: orden}
}

