
const getCharacterById = require("../controllers/getCharacterById.js");

const getCharacterByIdHandler = async (req, res) => {

    const {id} = req.params;

    try {
        const character = await getCharacterById(id);
        res.status(200).json(character)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

module.exports = getCharacterByIdHandler;