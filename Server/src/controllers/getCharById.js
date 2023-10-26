const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/";



const getCharById = async (req, res) => {
    let {id} = req.params

    let {data} = await axios.get(`${URL}${id}`)
    return data
   

}


module.exports = getCharById;

// 4. En el caso de que todo salga OK y se encuentre a un personaje, devuelve un JSON con las propiedades: **id**, **status**, **name**, **species**, **origin**, **image** y **gender**.

// 5. En el caso de que todo salga OK pero no se encuentre a un personaje, devuelve un mensaje con **status 404** que diga _Not fount_.

// 6. Si hay un error debes responder con un status 500, y un texto con la propiedad **`message`** de **error**.






//Homework promesas
// const getCharById = (res, id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//          .then(response => {
//             const {name, gender,species,origin,image,status} =
//             response.data;  
//         res.writeHead(200, {'Content-Type' : 'application/json'});
//         res.end(JSON.stringify({id, name, gender,species,origin,image,status}));
//          })
//          .catch(err => {
//            res.writeHead(500, {'Content-Type': 'text/plain'});
//            res.end(err.message)
//          });
// }

// module.exports = getCharById
