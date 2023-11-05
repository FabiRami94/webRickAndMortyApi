
const axios = require("axios");

const getAllCharacters = async () => {

    try {

        let pageNumber = 1;
        const charactersInfo = [];

        while( pageNumber <= 2 ){

            const apiRickAndMorty = (await axios.get(
                `https://rickandmortyapi.com/api/character?page=${pageNumber}`)).data.results;
                
            if(apiRickAndMorty && apiRickAndMorty.length > 0){
                apiRickAndMorty.forEach((character) => {
                    charactersInfo.push({
                    id: character.id,
                    name: character.name,
                    status: character.status,
                    species: character.species,
                    gender: character.gender,
                    origin: character.origin,
                    image: character.image,
                    });
                });
                pageNumber ++;
            } else {
                break;
            }
        };

        return [...charactersInfo];

    } catch (error) {
        throw new Error(error);
    }
};


module.exports = getAllCharacters;