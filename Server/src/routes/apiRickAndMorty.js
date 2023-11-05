
const {Router} = require("express");
const routerApi = Router();
const getAllCharactersHandler = require("../handlers/getAllCharactersHandler.js");
const getCharacterByIdHandler = require("../handlers/getCharacterByIdHandler.js");


routerApi.get("/allcharacters", getAllCharactersHandler);
routerApi.get("/character/:id", getCharacterByIdHandler);

module.exports = routerApi;
