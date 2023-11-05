
const getAllCharacters = require("../controllers/getAllCharacters.js");

const getAllCharactersHandler = async (req, res) => {
    try {
        const allcharacters = await getAllCharacters();
        res.status(200).json(allcharacters);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

module.exports = getAllCharactersHandler;