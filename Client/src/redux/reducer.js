
import { SEARCH_BY_ID, DELETE_BY_ID, ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions/actionsTypes.js";

const initialState = {
    myFavorites   : [],
    detail        : {},
    allCharacters : [],
    characters: [],
}
function rootReducer (state = initialState, action){
    //estado inicial --->  listado de acciones posibles, y como deberá modificarse el estado al recibirlo.
    switch(action.type){
        case SEARCH_BY_ID:
            if (state.characters.find(data => data.id === action.payload.parsedId)) {
                window.alert('¡No puedes agregar el mismo personaje más de una vez!')
                return state;
            } else {
                return {
                    ...state,
                    characters: [action.payload.character, ...state.characters],
                };
            }
        case DELETE_BY_ID:
            return{
                ...state,
                characters: state.characters.filter((character) => character.id !== action.payload)
            }
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(char => char.id !== +action.payload) // el + antes es para parsein()
            }

        case FILTER:
            return {
                ...state,
                myFavorites: state.allCharacters.filter(char => char.gender === action.payload)
            }

        case ORDER:
            
            let sortedCharacters = [...state.allCharacters]; // Crear una copia para no modificar el estado original

            if (action.payload === 'A') {
                sortedCharacters.sort((a, b) => a.id - b.id); // Orden ascendente
            } else if (action.payload === 'D') {
                sortedCharacters.sort((a, b) => b.id - a.id); // Orden descendente
            }

            return {
                ...state,
                myFavorites: sortedCharacters
            };

        default: // Importante, nunca debe faltar
            return state
    }
}

export default rootReducer;