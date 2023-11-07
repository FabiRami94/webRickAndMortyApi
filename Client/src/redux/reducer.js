
import { SEARCH_BY_ID, DELETE_BY_ID, ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions/actionsTypes.js";
import { alertError } from "../assets/modals.js";

const initialState = {
    myFavoritesOriginal: [],
    myFavorites   : [],
    characters: [],
}
function rootReducer (state = initialState, action){
    //estado inicial --->  listado de acciones posibles, y como deberá modificarse el estado al recibirlo.
    switch(action.type){
        case SEARCH_BY_ID:
            if (state.characters.find(data => data.id === action.payload.parsedId)) {
                alertError('¡No puedes agregar el mismo personaje más de una vez!')
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
                myFavorites: [action.payload, ...state.myFavorites],
                myFavoritesOriginal: [action.payload, ...state.myFavorites],
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(char => char.id !== action.payload), // el + antes es para parsein()
                myFavoritesOriginal: state.myFavoritesOriginal.filter(char => char.id !== action.payload)
            }

        case FILTER:

            let originalFilter = [...state.myFavoritesOriginal];

            let filteredGenres = state.myFavoritesOriginal.filter((
                char) => char.gender.includes(action.payload)
            );

            if (action.payload === 'R') {
                filteredGenres = originalFilter;
            }

            return {
                ...state,
                myFavorites: filteredGenres
            }

        case ORDER:
            
            let original = [...state.myFavoritesOriginal];
            let sortedCharacters = [...state.myFavorites]; // Crear una copia para no modificar el estado original

            if (action.payload === 'A') {
                sortedCharacters.sort((a, b) => a.id - b.id); // Orden ascendente
            } else if (action.payload === 'D') {
                sortedCharacters.sort((a, b) => b.id - a.id); // Orden descendente
            } else if (action.payload === 'R') {
                sortedCharacters = original;
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