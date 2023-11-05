

const axios = require('axios');

const getCharById = async (id) => {

    let response = (await axios.get(`https://rickandmortyapi.com/api/character/${id}`)).data;
    
    return response;
}


module.exports = getCharById;
